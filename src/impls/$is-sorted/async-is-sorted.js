/**
 * @generated-from ./$is-sorted.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { defaultCompareOrder } from '../../internal/compare.js';
import { __asyncPeekerate } from '../$peekerate/async-peekerate.js';

export async function __asyncIsSorted(iterable, compare = defaultCompareOrder) {
  const peekr = await __asyncPeekerate(iterable);

  while (!peekr.done) {
    const { value } = peekr;
    await peekr.advance();

    if (!peekr.done && compare(value, peekr.value) > 0) {
      await peekr.return();
      return false;
    }
  }
  return true;
}

export const asyncIsSorted = /*#__PURE__*/ asyncIterableCurry(__asyncIsSorted, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1,
});
