/**
 * @generated-from ./$split-on.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncSplitWith } from '../$split-with/async-split-with.js';

export function __asyncSplitOn(source, separator, same = Object.is) {
  return __asyncSplitWith(source, (value) => same(separator, value));
}

export const asyncSplitOn = /*#__PURE__*/ asyncIterableCurry(__asyncSplitOn, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs(args) {},
});
