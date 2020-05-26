/**
 * @generated-from ./$reduce.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { SourceIterable } from '../../../types/iterable';
import { reduce, range } from '../../..';
import { OneTwoThreeIterable } from '../../../__tests__/__framework__/fixtures';

describe('reduce', () => {
  it('sums an array', () => {
    expect(reduce((acc = 0, x) => acc + x, [0, 1, 2, 3])).toBe(6);
  });

  it('sums a range', () => {
    expect(reduce((acc = 0, x) => acc + x, range(4))).toBe(6);
  });

  it('sums using a specified initial value', () => {
    expect(reduce(1, (acc, x) => acc + x, range(4))).toBe(7);
  });

  it('sums using the initial value as the initial value', () => {
    expect(reduce((acc, x) => acc + x, range({ start: 2, end: 4 }))).toBe(5);
  });

  it('returns specified initial value when iterable is empty', () => {
    expect(reduce(0, (acc, x) => acc + x, [])).toBe(0);
  });

  it('throws when no initial value specified and iterable is empty', () => {
    let error;
    try {
      reduce((acc: any, x) => acc + x, []);
    } catch (e) {
      error = e;
    }

    expect(error).toBeInstanceOf(Error);
    expect(error.message).toMatchSnapshot();
  });

  it('sums a range (using curry)', () => {
    const sum: (iterable: SourceIterable<number>) => number = reduce((acc = 0, x) => acc + x);
    expect(sum(range(4))).toBe(6);
  });

  it('cleans up iterable', () => {
    const oneTwoThree = new OneTwoThreeIterable();
    try {
      reduce(() => {
        throw new Error('ops');
      }, oneTwoThree);
    } catch (e) {
      expect(oneTwoThree).toHaveProperty('isCleanedUp', true);
    }
  });
});
