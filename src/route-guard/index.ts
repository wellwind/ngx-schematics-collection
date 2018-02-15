import { normalize, strings } from '@angular-devkit/core';
import {
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  apply,
  branchAndMerge,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  template,
  url,
} from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { addProviderToModule } from '../utility/ast-utils';
import { InsertChange } from '../utility/change';
import { buildRelativePath, findModuleFromOptions } from '../utility/find-module';
import { Schema as ServiceOptions } from './schema';

const allowedGuards = ['CanActivate', 'CanActivateChild', 'CanDeactivate', 'Resolve', 'CanLoad'];

function addProviderToNgModule(options: ServiceOptions): Rule {
  return (host: Tree) => {
    if (!options.module) {
      return host;
    }

    const modulePath = options.module;
    if (!host.exists(options.module)) {
      throw new Error('Specified module does not exist');
    }

    const text = host.read(modulePath);
    if (text === null) {
      throw new SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');

    const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);

    const servicePath = `/${options.sourceDir}/${options.path}/`
                        + (options.flat ? '' : strings.dasherize(options.name) + '/')
                        + strings.dasherize(options.name)
                        + '.service';
    const relativePath = buildRelativePath(modulePath, servicePath);
    const changes = addProviderToModule(source, modulePath,
                                        strings.classify(`${options.name}Service`),
                                        relativePath);
    const recorder = host.beginUpdate(modulePath);
    for (const change of changes) {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      }
    }
    host.commitUpdate(recorder);

    return host;
  };
}

export default function (options: ServiceOptions): Rule {
  options.path = options.path ? normalize(options.path) : options.path;
  const sourceDir = options.sourceDir;
  if (!sourceDir) {
    throw new SchematicsException(`sourceDir option is required.`);
  }

  if(allowedGuards.indexOf(<string>options.type) < 0) {
    throw new SchematicsException('Must set the type of route guard(--type): \'CanActivate\', \'CanActivateChild\', \'CanDeactivate\', \'Resolve\', \'CanLoad\'');
  }

  return (host: Tree, context: SchematicContext) => {
    if (options.module) {
      options.module = findModuleFromOptions(host, options);
    }

    const templateSource = apply(url('./files'), [
      options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
      template({
        ...strings,
        'if-flat': (s: string) => options.flat ? '' : s,
        ...options,
      }),
      move(sourceDir),
    ]);

    return chain([
      branchAndMerge(chain([
        filter(path => path.endsWith('.module.ts') && !path.endsWith('-routing.module.ts')),
        addProviderToNgModule(options),
        mergeWith(templateSource),
      ])),
    ])(host, context);
  };
}