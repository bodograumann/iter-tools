/**
 * @generated-from ./is-async-iterable.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { isAsyncIterable } from '@iter-tools/es';

describe('isAsyncIterable', () => {
  describe('when value is an async iterable', () => {
    it('returns true', () => {
      expect(isAsyncIterable((async function* () {})())).toBe(true);
    });
  });

  describe('when value is not an async iterable', () => {
    it('returns false', () => {
      expect(isAsyncIterable((function* () {})())).toBe(false);
      expect(isAsyncIterable([])).toBe(false);
      expect(isAsyncIterable({})).toBe(false);
      expect(isAsyncIterable(undefined)).toBe(false);
      expect(isAsyncIterable(null)).toBe(false);
    });
  });
});