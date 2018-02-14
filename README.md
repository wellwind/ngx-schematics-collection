# Schematics Collection

[![npm version](https://badge.fury.io/js/ngx-schematics-collection.png)](https://badge.fury.io/js/ngx-schematics-collection)

Master: [![Build Status](https://travis-ci.org/wellwind/ngx-schematics-collection.svg?branch=master)](https://travis-ci.org/wellwind/ngx-schematics-collection)

Develop: [![Build Status](https://travis-ci.org/wellwind/ngx-schematics-collection.svg?branch=develop)](https://travis-ci.org/wellwind/ngx-schematics-collection)

Some useful schematics.

# Install

`npm install --save-dev ngx-schematics-collection`

# Usage

## Generate form control

`ng generate ngx-schematics-collection:form-control componentName`

The command above will generate a component with `NG_VALUE_ACCESSOR` related code.

The other parameters is same as generate component.

## Generate validator directive

Using command below to generate a validator directive:

`ng g ngx-schematics-collection:validator my-validator`

or generate a async validator

`ng g ngx-schematics-collection:validator my-validator --isAsync`

The other parameters is same as generate directive.
