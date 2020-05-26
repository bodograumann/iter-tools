/**
 * @generated-from ./$zip.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncZip, asyncToArray, asyncSlice, range } from '../../..';
import { AsyncOneTwoThreeIterable } from '../../../__tests__/__framework__/fixtures';

describe('asyncZip', () => {
  it('zips', async () => {
    const iter = asyncZip([1, 2, 3], [4, 5, 6], [7, 8, 9]);
    expect(await asyncToArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });

  it('zips using iterables', async () => {
    const iter = asyncZip(range({ start: 1, end: 4 }), range({ start: 4, end: 7 }), [7, 8, 9]);
    expect(await asyncToArray(iter)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });

  it('zips stopping early', async () => {
    const iter = asyncZip(range({ start: 1, end: 4 }), range({ start: 4, end: 7 }), [7, 8]);
    expect(await asyncToArray(iter)).toEqual([[1, 4, 7], [2, 5, 8]]);
  });

  it('closes when stopping earlier', async () => {
    // broken if transpiled with es5 loose
    const asyncOneTwoThree = new AsyncOneTwoThreeIterable();
    const iter = asyncSlice(0, 2, asyncZip(range(2), asyncOneTwoThree));
    expect(await asyncToArray(iter)).toEqual([[0, 1], [1, 2]]);
    expect(asyncOneTwoThree).toHaveProperty('isCleanedUp', true);
  });
});
