/**
 * @generated-from ./async-flat-map.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncFlatMap, asyncToArray, range } from '../../..';
describe('asyncFlatMap', () => {
  it('returns flatMapped iterable', async () => {
    const iter = asyncFlatMap(item => [item, item * 2], [1, 2, 3]);
    expect(await asyncToArray(iter)).toEqual([1, 2, 2, 4, 3, 6]);
  });
  it('returns flatMapped iterable from iterable', async () => {
    const iter = asyncFlatMap(item => [item, item * 2], range(1, 4));
    expect(await asyncToArray(iter)).toEqual([1, 2, 2, 4, 3, 6]);
  });
  it('returns flatMapped iterable (curried version)', async () => {
    const iter = asyncFlatMap((item: number) => [item, item * 2]);
    expect(await asyncToArray(iter(range(1, 4)))).toEqual([1, 2, 2, 4, 3, 6]);
  });
  it('returns empty iterable from null', async () => {
    expect(await asyncToArray(asyncFlatMap((item: never) => item, null))).toEqual([]);
  });
});
