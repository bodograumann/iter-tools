/**
 * @generated-from ./$iterator-proxy.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncIterableIterator } from './async-iterable-iterator';

export class AsyncIteratorProxy extends AsyncIterableIterator {
  constructor(iterator) {
    super();
    this.__iterator = iterator;
    this.__done = false;
  }

  async next() {
    const item = await this.__iterator.next();
    if (item.done || this.__done) {
      const doneItem = { value: this.__done ? undefined : item.value, done: true };
      this.__done = true;
      return doneItem;
    }
    return item;
  }

  async return(value) {
    const iterator = this.__iterator;
    const done = this.__done;
    this.__done = true;

    if (typeof iterator.return === 'function' && !done) await iterator.return();

    return { value, done: true };
  }

  async throw() {
    const iterator = this.__iterator;
    if (typeof iterator.throw === 'function') {
      const item = await iterator.throw();
      this.__done = item.done;
      return item;
    } else {
      this.__done = true;
      return { value: undefined, done: true };
    }
  }
}
