/**
 * @generated-from ./$take-last-or.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';

export async function asyncTakeLastOr(iterable, whenEmpty) {
  let _item = whenEmpty;

  for await (const item of iterable) {
    _item = item;
  }

  return _item;
}

export default asyncIterableCurry(asyncTakeLastOr, {
  reduces: true,
});