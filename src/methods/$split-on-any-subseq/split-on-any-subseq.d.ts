/**
 * @generated-from ./$split-on-any-subseq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable as SyncSourceIterable } from '../../types/iterable';
import { SourceIterable, ResultIterable } from '../../types/iterable';
declare function split(
  subseqs: SyncSourceIterable<SourceIterable<any>>,
): <T>(source: SourceIterable<T>) => ResultIterable<ResultIterable<T>>;
declare function split<T>(
  subseqs: SyncSourceIterable<SourceIterable<any>>,
  source: SourceIterable<T>,
): ResultIterable<ResultIterable<T>>;
export default split;
