cury
===

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Usage:

```ts
import curry from 'cury';

const curried = curry(function(name: string, age: number) {
  return `${name} is ${age} years old`;
})

console.log(curried('Bob')(50)); // logs: 'Bob is 50 years old'
```

[npm-image]: https://img.shields.io/npm/v/curry.ts.svg?style=flat-square
[npm-url]: https://npmjs.org/package/curry.ts
[travis-image]: https://img.shields.io/travis/kolodny/curry.ts.svg?style=flat-square
[travis-url]: https://travis-ci.org/kolodny/curry.ts
[coveralls-image]: https://img.shields.io/coveralls/kolodny/curry.ts.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/kolodny/curry.ts
[downloads-image]: http://img.shields.io/npm/dm/curry.ts.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/curry.ts
