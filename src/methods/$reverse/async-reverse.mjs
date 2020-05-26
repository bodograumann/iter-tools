/**
 * @generated-from ./$reverse.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncToArray } from '../$to-array/async-to-array';

export async function* asyncReverse(source) {
  yield* (await asyncToArray(source)).reverse();
}

export default asyncIterableCurry(asyncReverse);
