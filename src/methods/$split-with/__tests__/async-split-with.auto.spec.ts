/**
 * @generated-from ./async-split-with.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncUnwrapDeep as asyncUw } from '../../../__tests__/async-helpers';
import { asyncSplitWith, asyncToArray } from '../../..';
describe('asyncSplitWith', () => {
  it('should split between every item which is equal to the on argument', async () => {
    expect(await asyncUw(asyncSplitWith(i => i === null, [1, null, 2, null, 3]))).toEqual([
      [1],
      [2],
      [3],
    ]);
  });
});
