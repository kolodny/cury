cury
===

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

Usage:

```ts
import curry from 'cury';

const curried = curry(function(name: string, age: number) {
  return `${name} is ${age} years old`;
})

console.log(curried('Bob')(50)); // logs: 'Bob is 50 years old'
```

[npm-image]: https://img.shields.io/npm/v/cury.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cury
[travis-image]: https://img.shields.io/travis/kolodny/cury.svg?style=flat-square
[travis-url]: https://travis-ci.org/kolodny/cury
[downloads-image]: http://img.shields.io/npm/dm/cury.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/cury
