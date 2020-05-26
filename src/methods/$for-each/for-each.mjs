/**
 * @generated-from ./$for-each.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';

export function forEach(iterable, callback) {
  let c = 0;
  for (const item of iterable) {
    callback(item, c++);
  }
}

export default iterableCurry(forEach, {
  reduces: true,
});
