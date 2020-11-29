import { iterableCurry } from '../../internal/iterable.js';

export function* __method__(source) {
  for (const item of source) {
    yield item;
  }

  throw new Error('Dummy implementation');
}

export default iterableCurry(__method__);