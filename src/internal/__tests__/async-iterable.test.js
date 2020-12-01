/**
 * @generated-from ./$iterable.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncEnsureIterable, asyncIterableCurry } from '../async-iterable.js';
import { asyncWrap, asyncUnwrap } from '../../test/async-helpers.js';

describe('asyncEnsureIterable', () => {
  describe('when i is a sync iterable', () => {
    it('returns i wrapped in an async iterable', async () => {
      const i = asyncEnsureIterable([1, 2, 3]);
      expect(typeof i[Symbol.asyncIterator]).toBe('function');
      expect(await asyncUnwrap(asyncEnsureIterable(i))).toEqual([1, 2, 3]);
    });
  });

  describe(`when i is ${'asyncIterable'}`, () => {
    it('returns i', () => {
      const i = asyncWrap([1, 2, 3]);
      expect(i).toBe(asyncEnsureIterable(i));
    });
  });

  it('works with iterables', async () => {
    expect(await asyncUnwrap(asyncEnsureIterable(asyncWrap([1, 2, 3])))).toEqual([1, 2, 3]);
  });

  describe('when i is null', () => {
    it('returns the empty iterable', async () => {
      const i = asyncEnsureIterable(null);
      expect(await asyncUnwrap(i)).toEqual([]);
    });
  });

  describe('when i cannot be coerced to an iterable', () => {
    it('throws', () => {
      expect(() => asyncEnsureIterable(false)).toThrowErrorMatchingSnapshot();
    });
  });

  describe('when i looks like an iterator', () => {
    it('throws a more helpful error', () => {
      expect(() => asyncEnsureIterable({ next: () => null })).toThrowErrorMatchingSnapshot();
    });
  });
});

class Hello {}
class Goodbye {}
class World {}

const hello = new Hello();
const goodbye = new Goodbye();
const world = new World();

async function* iter(...args) {
  yield* args;
}

async function add(initial, iterable) {
  let result = initial;
  for await (const number of iterable) {
    result += number;
  }
  return result;
}

async function addAll(initial, iterables) {
  let result = initial;
  for (const iterable of iterables) {
    for await (const number of iterable) {
      result += number;
    }
  }
  return result;
}

describe('asyncIterableCurry', () => {
  const f2 = (_iterable, a, b) => iter(a, b);
  const f1 = (_iterable, a) => iter(a);
  const f0 = (_iterable) => iter();
  const c2 = asyncIterableCurry(f2);
  const c1 = asyncIterableCurry(f1);
  const c0 = asyncIterableCurry(f0);
  /* eslint-disable no-unused-expressions */
  f2.name; // Make sure names don't get thrown away by babel-minify
  f1.name;
  f0.name;
  /* eslint-enable no-unused-expressions */

  it('curries', async () => {
    expect(await asyncUnwrap(c2(hello, world, []))).toEqual([hello, world]);
    expect(await asyncUnwrap(c2(hello, world)([]))).toEqual([hello, world]);
    expect(await asyncUnwrap(c2(hello)(world, []))).toEqual([hello, world]);
    expect(await asyncUnwrap(c2(hello)(world)([]))).toEqual([hello, world]);
    expect(await asyncUnwrap(c1(hello, []))).toEqual([hello]);
    expect(await asyncUnwrap(c1(hello)([]))).toEqual([hello]);
    expect(await asyncUnwrap(c0([]))).toEqual([]);
  });

  it('ignores extra arguments after iterable', async () => {
    expect(await asyncUnwrap(c2(hello, world, [], 'foo'))).toEqual([hello, world]);
    expect(await asyncUnwrap(c1(hello)([], null))).toEqual([hello]);
    expect(await asyncUnwrap(c0([], 4))).toEqual([]);
  });

  it('creates a static iterator', async () => {
    const c = asyncIterableCurry(async function* $wrap(i) {
      yield* i;
    });
    expect(await c([1]).next()).toEqual({ value: 1, done: false });
    expect(await c([]).return()).toEqual({ value: undefined, done: true });
    expect(
      await (async () => {
        try {
          await c([]).throw(new Error());
        } catch (e) {
          return e;
        }
      })(),
    ).toBeInstanceOf(Error);
  });

  it('throws with empty invocations', () => {
    expect(() => c2()(hello)(world)([])).toThrowErrorMatchingSnapshot();
    expect(() => c2(hello)()(world)([])).toThrowErrorMatchingSnapshot();
    expect(() => c2(hello)(world)()([])).toThrowErrorMatchingSnapshot();
  });

  it('throws with too many args', () => {
    expect(() => c2(hello)(goodbye)(world)([])).toThrowErrorMatchingSnapshot();
    expect(() => c1(hello)(world)([])).toThrowErrorMatchingSnapshot();
    expect(() => c0(hello)([])).toThrowErrorMatchingSnapshot();
  });

  describe('validates args', () => {
    it('can stop method execution by throwing an error', () => {
      const helloImpl = jest.fn();
      const hello = asyncIterableCurry(helloImpl, {
        minArgs: 1,
        maxArgs: 1,
        validateArgs(args) {
          const [world] = args;
          if (!(world instanceof World)) {
            throw new Error('Expected the world');
          }
        },
      });
      expect(() => hello(null, [])).toThrowErrorMatchingSnapshot();
      expect(helloImpl).not.toHaveBeenCalled();
    });

    it('can alter arguments', async () => {
      const empty = (async function* () {})();
      const helloImpl = jest.fn(async function* () {});
      const hello = asyncIterableCurry(helloImpl, {
        minArgs: 1,
        maxArgs: 1,
        validateArgs(args) {
          args[0] = world;
        },
      });
      await asyncUnwrap(hello(null, empty));
      expect(helloImpl).toHaveBeenCalledWith(empty, world);
    });
  });

  describe('when passed explicit arity', () => {
    const f = (c, a = goodbye, b = world) => iter(a, b);
    const c = asyncIterableCurry(f, { minArgs: 0, maxArgs: 2 });
    /* eslint-disable no-unused-expressions */
    f.name; // Make sure it don't get thrown away by babel-minify
    /* eslint-enable no-unused-expressions */

    it('curries', async () => {
      expect(await asyncUnwrap(c(hello)(world)([]))).toEqual([hello, world]);
      expect(await asyncUnwrap(c(hello)([]))).toEqual([hello, world]);
      expect(await asyncUnwrap(c([]))).toEqual([goodbye, world]);
    });

    it('throws with empty invocations', () => {
      expect(() => c2()(hello)(world)([])).toThrowErrorMatchingSnapshot();
    });

    it('throws with too many args', () => {
      expect(() => c(hello)(goodbye)(world)([])).toThrow(
        new Error(
          `f takes up to 2 arguments, followed by ${'asyncIterable'}. You already passed 3 arguments and the last argument was not ${'asyncIterable'}`,
        ),
      );
    });
  });

  describe('works with reducing functions', () => {
    const f2 = (iterable, a, b) => add(a + b, iterable);
    const f1 = (iterable, a) => add(a, iterable);
    const f0 = (iterable) => add(0, iterable);
    const c2 = asyncIterableCurry(f2, { reduces: true });
    const c1 = asyncIterableCurry(f1, { reduces: true });
    const c0 = asyncIterableCurry(f0, { reduces: true });
    /* eslint-disable no-unused-expressions */
    f2.name; // Make sure names don't get thrown away by babel-minify
    f1.name;
    f0.name;
    /* eslint-enable no-unused-expressions */

    it('curries', async () => {
      expect(await c2(1)(2)([4])).toBe(7);
      expect(await c1(1)([2])).toBe(3);
      expect(await c0([1])).toBe(1);
    });

    it('throws with empty invocations', () => {
      expect(() => c2()(1, 2, [4])).toThrowErrorMatchingSnapshot();
      expect(() => c2(1, 2)()([4])).toThrowErrorMatchingSnapshot();
    });

    it('throws with too many args', () => {
      expect(() => c2(1)(2)(3)([])).toThrowErrorMatchingSnapshot();
      expect(() => c1(1)(2)([])).toThrowErrorMatchingSnapshot();
      expect(() => c0(1)([])).toThrowErrorMatchingSnapshot();
    });
  });

  describe('works with variadic functions', () => {
    const f1 = (iterables, a) => addAll(a, iterables);
    /* eslint-disable no-unused-expressions */
    f1.name; // Make sure it doesn't get thrown away by babel-minify
    /* eslint-enable no-unused-expressions */
    const c1 = asyncIterableCurry(f1, { variadic: true, reduces: true });

    it('curries', async () => {
      expect(await c1(1)([2, 4], [8, 16])).toBe(31);
      expect(await c1(1)([2, 4])).toBe(7);
    });

    it('throws with empty invocations', () => {
      expect(() => c1(1)()([2, 4])).toThrowErrorMatchingSnapshot();
    });

    it('throws with too many args', () => {
      expect(() => c1(1)(2)([4, 8])).toThrowErrorMatchingSnapshot();
    });
  });
});
