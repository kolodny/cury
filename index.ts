function curry<A, R>(fn: (a: A) => R): (a: A) => R
function curry<A, B, R>(fn: (a: A, b: B) => R): (a: A) => (b: B) => R
function curry<A, B, C, R>(fn: (a: A, b: B, c: C) => R): (a: A) => (b: B) => (c: C) => R
function curry<A, B, C, D, R>(fn: (a: A, b: B, c: C, d: D) => R): (a: A) => (b: B) => (c: C) => (d: D) => R
function curry<A, B, C, D, E, R>(fn: (a: A, b: B, c: C, d: D, e: E) => R): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => R
function curry<A, B, C, D, E, F, R>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => R): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => R
function curry<A, B, C, D, E, F, G, R>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => R): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => R
function curry<A, B, C, D, E, F, G, H, R>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => R): (a: A) => (b: B) => (c: C) => (d: D) => (e: E)  => (f: F) => (g: G) => (h: H) => R
function curry<A, B, C, D, E, F, G, H, I, R>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => R): (a: A) => (b: B) => (c: C) => (d: D) => (e: E)  => (f: F) => (g: G) => (h: H) => (i: I) => R
function curry(fn: Function) {
  return function curried(...args: any[]) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return curry(fn.bind(null, ...args))
  }
}

export = curry
