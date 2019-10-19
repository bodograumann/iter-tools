/**
 * @generated-from ./$every.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable } from '../../types/async-iterable';
declare function asyncEvery<T>(
  func: (item: T) => boolean | Promise<boolean>,
): (iterable: AsyncSourceIterable<T>) => Promise<boolean>;
declare function asyncEvery<T>(
  func: (item: T) => boolean | Promise<boolean>,
  iterable: AsyncSourceIterable<T>,
): Promise<boolean>;
export default asyncEvery;
