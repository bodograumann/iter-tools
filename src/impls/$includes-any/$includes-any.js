import { $isSync, $async, $await } from '../../../generate/async.macro.cjs';

import { $iterableCurry } from '../../internal/$iterable.js';
import { $__findOr } from '../$find-or/$find-or.js';
import { __includes } from '../$includes/includes.js';

const none = Symbol('none');

$async;
export function $__includesAny(iterable, values, same = Object.is) {
  return (
    $await(
      $__findOr(iterable, none, (value) => __includes(values, value, (a, b) => same(b, a))),
    ) !== none
  );
}

export const $includesAny = /*#__PURE__*/ $iterableCurry($__includesAny, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs(args) {
    if ($isSync && typeof args[0] === 'string') {
      console.warn(`For string inputs use includesAnySeq instead of includesAny`);
    }
  },
});
