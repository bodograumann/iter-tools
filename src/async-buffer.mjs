import { ensureAsyncIterable } from './internal/async-iterable'
import { curry } from './internal/curry'
import { Queue } from './internal/queues'

async function * asyncBuffer (bufferSize, iterable) {
  const iterator = ensureAsyncIterable(iterable, true)[Symbol.asyncIterator]()
  const buffer = new Queue()
  try {
    // fill buffer
    for (let i = 0; i < bufferSize; i++) {
      buffer.push(iterator.next())
    }
    while (true) {
      buffer.push(iterator.next())
      const { done, value } = await buffer.shift()
      if (done) return
      yield value
    }
  } finally {
    if (typeof iterator.return === 'function') await iterator.return()
  }
}

export default curry(asyncBuffer)
