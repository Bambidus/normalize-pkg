# normalize-pkg [![NPM version](https://img.shields.io/npm/v/normalize-pkg.svg)](https://www.npmjs.com/package/normalize-pkg)

> Normalize values in package.json to improve compatibility, programmatic readability and usefulness with third party libs.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i normalize-pkg --save
```

Install with [bower](http://bower.io/)

```sh
$ bower install normalize-pkg --save
```

## Usage

```js
var normalize = require('normalize-pkg');
var pkg = require('./package');
normalize(pkg);
```

## Schema

normalize-pkg takes a schema, where each key on the schema represents a property name on package.json. A default schema is used but it can easily be overridden.

**Keys**

Schema property keys represent the properties you want on your package.json. For example, here is are a couple of properties from the default schema:

```js
{
  name: {
    // ensure it's a string
    type: 'string',
    value: function (key, val, config) {
      // if you're initializing a new project, the `projectName`
      // function tries to intelligently guess that name
      return val || utils.projectName(process.cwd());
    }
  },
  // ensure it's a string, use the default if undefined
  description: {
    type: 'string',
    default: ''
  },
  // ensure it's a string, use the default if undefined
  version: {
    type: 'string',
    default: '0.1.0'
  }
}
```

**Schema properties**

The foll

* `type`: native javascript type. If the property is defined and it's type does not match this value an error is thrown
* `value`: This can be any type of value. If it's a function, it will be called and passed the `key` and `value` currently defined for the property, and the entire `config` as the last argument. If it's any other value, that value will be used and will overwrite any existing value. If you only want to use a value if it's undefined, use `default` instead or a `value` function if conditional logic is required.
+ `default`: Set the default value to use when the property is undefined. Only necessary if `value` is not defined.

## Options

When an options object is passed as the second argument it will be used to extend or override properties on the existing schema.

```js
normalize(pkg, {
  name: {
    value: 'foo' // always use 'foo' as the project name
  },
  version: {
    value: function(key, val) {
      // validate version with semver or something. 
      // be creative :) just remember to return the value!
      return value;
    }
  }
});
```

## Related projects

[update](https://www.npmjs.com/package/update): Update the year in all files in a project using glob patterns. | [homepage](https://github.com/jonschlinkert/update)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/normalize-pkg/issues/new).

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on December 10, 2015._