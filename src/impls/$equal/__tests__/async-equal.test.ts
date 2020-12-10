/**
 * @generated-from ./$equal.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncEqual } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncEqual', () => {
  describe('when there is only one iterable', () => {
    it('returns true', async () => {
      expect(await asyncEqual(null)).toBe(true);
      expect(await asyncEqual(undefined)).toBe(true);
      expect(await asyncEqual(asyncWrap([1, 2, 3]))).toBe(true);
    });
  });

  describe('when all values in all iterables are equal', () => {
    it('returns true', async () => {
      expect(await asyncEqual(asyncWrap([]), asyncWrap([]))).toBe(true);
      expect(await asyncEqual(null, undefined)).toBe(true);
      expect(await asyncEqual(null, undefined, asyncWrap([]))).toBe(true);
      expect(await asyncEqual(asyncWrap([1, 2, 3]), asyncWrap([1, 2, 3]))).toBe(true);
      expect(
        await asyncEqual(asyncWrap([1, 2, 3]), asyncWrap([1, 2, 3]), asyncWrap([1, 2, 3])),
      ).toBe(true);
    });
  });

  describe('when all values in some iterables are equal', () => {
    it('returns false', async () => {
      expect(
        await asyncEqual(asyncWrap([1, 2, 3]), asyncWrap([1, 2, 3]), asyncWrap([1, 2, 4])),
      ).toBe(false);
      expect(
        await asyncEqual(asyncWrap([1, 2, 3]), asyncWrap([1, 2, 4]), asyncWrap([1, 2, 3])),
      ).toBe(false);
      expect(
        await asyncEqual(asyncWrap([1, 2, 4]), asyncWrap([1, 2, 3]), asyncWrap([1, 2, 3])),
      ).toBe(false);
    });
  });

  describe('when iterables have the same values but different lengths', () => {
    it('returns false', async () => {
      expect(await asyncEqual(asyncWrap([1]), asyncWrap([1]), asyncWrap([1, 2]))).toBe(false);
      expect(await asyncEqual(asyncWrap([1]), asyncWrap([1, 2]), asyncWrap([1]))).toBe(false);
      expect(await asyncEqual(asyncWrap([1, 2]), asyncWrap([1]), asyncWrap([1]))).toBe(false);
      expect(await asyncEqual(asyncWrap([]), asyncWrap([]), asyncWrap([1]))).toBe(false);
      expect(await asyncEqual(asyncWrap([]), asyncWrap([1]), asyncWrap([]))).toBe(false);
      expect(await asyncEqual(asyncWrap([1]), asyncWrap([]), asyncWrap([]))).toBe(false);
    });
  });
});
