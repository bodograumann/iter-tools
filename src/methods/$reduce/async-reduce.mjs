/**
 * @generated-from ./$reduce.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';

export async function asyncReduce(iterable, initial, reducer) {
  let c = 0;
  let result = initial;
  const iterator = iterable[Symbol.asyncIterator]();
  try {
    if (initial === undefined) {
      const firstResult = await iterator.next();
      if (firstResult.done) {
        throw new Error('Cannot reduce: no initial value specified and iterable was empty');
      }
      result = firstResult.value;
      c = 1;
    }
    let nextItem;
    while (!(nextItem = await iterator.next()).done) {
      result = await reducer(result, nextItem.value, c++);
    }
    return result;
  } finally {
    // close the iterator in case of exceptions
    if (typeof iterator.return === 'function') await iterator.return();
  }
}

export default asyncIterableCurry(asyncReduce, {
  reduces: true,
  minArgs: 1,
  maxArgs: 2,
});
