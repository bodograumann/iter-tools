/**
 * @generated-from ./$find.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { findOr } from '../$find-or/find-or';

export function find(iterable, predicate) {
  return findOr(iterable, undefined, predicate);
}

export default iterableCurry(find, {
  reduces: true,
});
