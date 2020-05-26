/**
 * @generated-from ./$spliterator.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { AsyncPartsIterator, split } from '../async-spliterator';
import { asyncWrap } from '../../__tests__/__framework__/async-wrap';

describe('asyncSpliterator', () => {
  async function* asyncTestSpliterator() {
    const sourceIterator = asyncWrap(['first', 'second']);
    let sourceDone = false;
    try {
      yield (await sourceIterator.next()).value;
      yield split;
      yield (await sourceIterator.next()).value;
      await sourceIterator.next();
      sourceDone = true;
    } finally {
      if (!sourceDone) {
        sourceIterator.return();
      }
    }
  }

  async function* asyncTestSplit() {
    yield* new AsyncPartsIterator(asyncTestSpliterator());
  }

  // The assertions in these tests are part of the cleanup defined by $wrap

  it('source is cleaned up if no values are taken', async () => {
    const parts = asyncTestSplit();
    await parts.next();
    await parts.return();
  });

  it('source is cleaned up if part manager is closed then active part', async () => {
    const parts = asyncTestSplit();
    const part = (await parts.next()).value;
    await part.next();
    await parts.return();
    await part.return();
  });

  it('source is cleaned up if active part is closed then part manager', async () => {
    const parts = asyncTestSplit();
    const part = (await parts.next()).value;
    await part.next();
    await part.return();
    await parts.return();
  });

  it('source is cleaned up if active part is done then part manager is closed', async () => {
    const parts = asyncTestSplit();
    const part = (await parts.next()).value;
    await part.next();
    await part.next();
    await parts.return();
  });

  it('source is cleaned up if part manager is closed then active part is done', async () => {
    const parts = asyncTestSplit();
    const part = (await parts.next()).value;
    await parts.return();
    await part.next();
    await part.next();
  });

  it('source is cleaned up if only parts are consumed', async () => {
    const parts = asyncTestSplit();
    await parts.next();
    await parts.next();
    await parts.next();
  });
});
