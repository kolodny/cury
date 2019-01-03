import curry from './';

const assert = (a: string, b: string) => {
  if (a !== b) {
    throw new Error(`Strings do not match!\n${a}\ndoes not match\n${b}`);
  }
}

const f1 = (s1: string) => `${s1}`
const f2 = (s1: string, s2: string) => `${s1}${s2}`
const f3 = (s1: string, s2: string, s3: string) => `${s1}${s2}${s3}`
const f4 = (s1: string, s2: string, s3: string, s4: string) => `${s1}${s2}${s3}${s4}`
const f5 = (s1: string, s2: string, s3: string, s4: string, s5: string) => `${s1}${s2}${s3}${s4}${s5}`
const f6 = (s1: string, s2: string, s3: string, s4: string, s5: string, s6: string) => `${s1}${s2}${s3}${s4}${s5}${s6}`
const f7 = (s1: string, s2: string, s3: string, s4: string, s5: string, s6: string, s7: string) => `${s1}${s2}${s3}${s4}${s5}${s6}${s7}`
const f8 = (s1: string, s2: string, s3: string, s4: string, s5: string, s6: string, s7: string, s8: string) => `${s1}${s2}${s3}${s4}${s5}${s6}${s7}${s8}`
const f9 = (s1: string, s2: string, s3: string, s4: string, s5: string, s6: string, s7: string, s8: string, s9: string) => `${s1}${s2}${s3}${s4}${s5}${s6}${s7}${s8}${s9}`

describe('curry.ts', () => {
  it('curries an arty of 1', () => {
    const curried = curry(f1);
    assert(curried('a'), 'a');
  });

  it('curries an arty of 2', () => {
    const curried = curry(f2);
    assert(curried('a')('b'), 'ab');
  });

  it('curries an arty of 3', () => {
    const curried = curry(f3);
    assert(curried('a')('b')('c'), 'abc');
  });

  it('curries an arty of 4', () => {
    const curried = curry(f4);
    assert(curried('a')('b')('c')('d'), 'abcd');
  });

  it('curries an arty of 5', () => {
    const curried = curry(f5);
    assert(curried('a')('b')('c')('d')('e'), 'abcde');
  });

  it('curries an arty of 6', () => {
    const curried = curry(f6);
    assert(curried('a')('b')('c')('d')('e')('f'), 'abcdef');
  });

  it('curries an arty of 7', () => {
    const curried = curry(f7);
    assert(curried('a')('b')('c')('d')('e')('f')('g'), 'abcdefg');
  });

  it('curries an arty of 8', () => {
    const curried = curry(f8);
    assert(curried('a')('b')('c')('d')('e')('f')('g')('h'), 'abcdefgh');
  });

  it('curries an arty of 9', () => {
    const curried = curry(f9);
    assert(curried('a')('b')('c')('d')('e')('f')('g')('h')('i'), 'abcdefghi');
  });

  it('keeps track of all the different types', () => {
    interface A { a: string }
    interface B { b: string }
    interface C { c: string }
    interface D { d: string }
    interface E { e: string }
    interface F { f: string }
    interface G { g: string }
    interface H { h: string }
    interface I { i: string }
    const differentTyped9 = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => {
      return a.a + b.b + c.c + d.d + e.e + f.f + g.g + h.h + i.i;
    }
    const curried = curry(differentTyped9);
    assert(
      curried({a: '@'})({b: '6'})({c: '<'})({d: 'D'})({e: '7'})({f: 'F'})({g: 'G'})({h: 'H'})({i: '1'}),
      '@6<D7FGH1');
  })
});