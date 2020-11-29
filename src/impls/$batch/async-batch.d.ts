/**
 * @generated-from ./$batch.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncBatch(
  size: number,
): <T>(source: AsyncSourceIterable<T>) => AsyncResultIterable<T[]>;

declare function asyncBatch<T>(
  size: number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T[]>;

export default asyncBatch;