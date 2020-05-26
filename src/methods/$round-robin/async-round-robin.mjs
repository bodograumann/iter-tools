/**
 * @generated-from ./$round-robin.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';

import { asyncInterleave } from '../$interleave/async-interleave';

async function* asyncByPosition({ start, step }, canTakeAny, ...buffers) {
  start = start % buffers.length;
  for (let i = start; await canTakeAny(); i = (i + step) % buffers.length) {
    if (await buffers[i].canTake()) yield await buffers[i].take();
  }
}

export function asyncRoundRobin(sources, start = 0, step = 1) {
  return asyncInterleave(sources, asyncByPosition, { start, step });
}

export default asyncIterableCurry(asyncRoundRobin, {
  variadic: true,
  minArgs: 0,
  maxArgs: 2,
  validateArgs(args) {
    if (args[1] && typeof args[1] === 'object') {
      const { start, step } = args[1];
      args[0] = start != null ? start : 0;
      args[1] = step != null ? start : 1;
    }

    if (args[1] <= 0) {
      throw new Error('step argument to roundRobin must be >= 0');
    }
  },
});
