/**
 * @generated-from ./interpose.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { interpose, toArray, range } from '../../..';

describe('interpose', () => {
  it('interposes items into array', () => {
    const iter = interpose(9, [1, 2, 3]);
    expect(toArray(iter)).toEqual([1, 9, 2, 9, 3]);
  });

  it('interposes items into an iterable', () => {
    const iter = interpose(null, range({ start: 1, end: 4 }));
    expect(toArray(iter)).toEqual([1, null, 2, null, 3]);
  });

  it('returns mapped iterable (curried version)', () => {
    const iter = interpose([]);
    expect(toArray(iter(range({ start: 1, end: 4 })))).toEqual([1, [], 2, [], 3]);
  });

  it('returns empty iterable from null', () => {
    expect(toArray(interpose('', null))).toEqual([]);
  });
});
