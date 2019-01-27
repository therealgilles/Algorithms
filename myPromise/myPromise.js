// From https://thecodebarbarian.com/write-your-own-node-js-promise-library-from-scratch.html

class MyPromise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new Error('Executor must be a function')
    }

    this.$state = 'PENDING'
    this.$chained = []

    const resolve = res => {
      if (this.$state !== 'PENDING') {
        return
      }

      // is res a promise?
      const then = (res != null) ? res.then : null
      if (typeof then === 'function') {
        return then(resolve, reject)
      }

      this.$state = 'FULFILLED'
      this.$internalValue = res

      for (const { onFulfilled } of this.$chained) {
        onFulfilled(res)
      }
    }

    const reject = err => {
      if (this.$state !== 'PENDING') {
        return
      }

      this.$state = 'REJECTED'
      this.$internalValue = err

      for (const { onRejected } of this.$chained) {
        onRejected(err)
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const _onFulfilled = res => {
        try {
          resolve(onFulfilled(res))
        } catch (err) {
          reject(err)
        }
      }

      const _onRejected = err => {
        try {
          reject(onRejected(err))
        } catch (_err) {
          reject(_err)
        }
      }

      if (this.$state === 'FULFILLED') {
        _onFulfilled(this.$internalValue)
      } else if (this.$state === 'REJECTED') {
        _onRejected(this.$internalValue)
      } else {
        this.$chained.push({ onFulfilled: _onFulfilled, onRejected: _onRejected })
      }
    })
  }

  catch(fn) {
    return this.then(null, fn)
  }
}

MyPromise.all = promiseArray => {
  return new MyPromise((resolve, reject) => {
    const results = []
    let cnt = 0;
    promiseArray.forEach((p, idx) => {
      p.then(result => {
        results[idx] = result
        if (++cnt >= promiseArray.length) return resolve(results)
      })
      .catch(reject)
    })
  })
}

const debug = false

if (debug) {

  run().catch(error => console.error(error.stack))

  async function run() {
    const start = Date.now()
    await new MyPromise(resolve => setTimeout(() => resolve(), 100))
    console.log('Elapsed time:', Date.now() - start)
  }

  run1().catch(error => console.error(error.stack))

  async function run1() {
    const results = await MyPromise.all([
      new MyPromise(resolve => resolve(1)),
      new MyPromise(resolve => resolve(2)),
    ])
    console.log('Results:', results)
  }

}
