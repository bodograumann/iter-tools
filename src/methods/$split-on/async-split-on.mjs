/**
 * @generated-from ./$split-on.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncSplitOn_ } from '../$split-on_/async-split-on_';
const config = {
  any: false,
  subseq: false,
};
export function asyncSplitOn(source, value) {
  return asyncSplitOn_(source, config, value);
}
export default asyncIterableCurry(asyncSplitOn);
