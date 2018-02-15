# Schematics Collection

[![npm version](https://badge.fury.io/js/ngx-schematics-collection.svg)](https://badge.fury.io/js/ngx-schematics-collection)

Master: [![Build Status](https://travis-ci.org/wellwind/ngx-schematics-collection.svg?branch=master)](https://travis-ci.org/wellwind/ngx-schematics-collection)

Develop: [![Build Status](https://travis-ci.org/wellwind/ngx-schematics-collection.svg?branch=develop)](https://travis-ci.org/wellwind/ngx-schematics-collection)

Some useful schematics.

# Install

`npm install --save-dev ngx-schematics-collection`

# Usage

## Generate form control

`ng generate ngx-schematics-collection:form-control component-name`

The command above will generate a component with `NG_VALUE_ACCESSOR` related code.

The other parameters are same as generate component.

## Generate validator directive

Using command below to generate a validator directive:

`ng g ngx-schematics-collection:validator my-validator`

or generate a async validator

`ng g ngx-schematics-collection:validator my-validator --isAsync`

The other parameters are same as generate directive.

## Generate route guards

You can create different types of route guard:

- [CanActivate](https://angular.io/api/router/CanActivate) to mediate navigation to a route.
- [CanActivateChild](https://angular.io/api/router/CanActivateChild) to mediate navigation to a child route.
- [CanDeactivate](https://angular.io/api/router/CanDeactivate) to mediate navigation away from the current route.
- [Resolve](https://angular.io/api/router/Resolve) to perform route data retrieval before route activation.
- [CanLoad](https://angular.io/api/router/CanLoad) to mediate navigation to a feature module loaded asynchronously.

Just choose a type of route guard, then use it to `--type` parameter, for example: create a 'CanActivate' route guard:

`ng g ngx-schematics-collection:route-guard route-guard-name --type=CanActivate`

The other parameters are same as generate service.