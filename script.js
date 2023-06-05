const nullishCoalescin = () => {
  let a
  const x = { a: 1 }
  const y = x.b
  const z = x.b ?? 'bbb'
  // const t = true && null ?? x.a '&&' and '??' operations cannot be mixed without parentheses.
  const t = (null || a) ?? 'ttt'
  console.log(a, x, y, z, t)
}

const regex = () => {
  const regEx = /abc/i
  const regExGlobal = /abc/gi
  const testStr = 'jhgabcasdasdabcasABC'
  console.log(regEx.test('ABCA'))
  console.log(testStr.match(regEx))
  console.log(testStr.match(regExGlobal))
  console.log(testStr.replace(regExGlobal, '___'))
  console.log(regEx.test(testStr))
}
const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  })
const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1500)
  })
const promise3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(3), 500)
  })
const promiseAll = async () => {
  console.time('resolve')
  const [result1, result2] = await Promise.all([promise1(), promise2()])
  console.log(`result: ${result1} ${result2}`)
  console.timeEnd('resolve')
  console.time('reject')
  try {
    const [result1, result2] = await Promise.all([promise1(), promise3()])
  } catch (error) {
    console.error(`error: ${error}`)
  }
  console.timeEnd('reject')
  /* const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)]
  const p = Promise.all(resolvedPromisesArray)
  console.log(p)
  setTimeout(() => {
    console.log('the queue is now empty')
    console.log(p)
  }) */
}
const promiseAllSettled = async () => {
  const respones = await Promise.allSettled([promise1(), promise3()])
  const data = respones.map((response) =>
    response.status === 'fulfilled' ? response.value : 'error'
  )
  console.log(data)
}

const array = () => {
  const x = ['1', 2, 3, 3, 4, 5, 6, 7, 6, 5, 4, 3, 3, 1]
  x.sort((a, b) => b - a)
  const removeDuplicate = [...new Set(x)]
  console.log(removeDuplicate)
}
const nan = () => {
  const x = [{}, [], null, undefined, 'NaN', NaN]
  const y = x.map((i) => isNaN(i))
  const q = x.map((i) => Number.isNaN(i))
  const z = x.map((i) => Number(i))

  console.table([x, z, y, q])
}
const string = () => {
  const x = 'string'
  const c = x + [1, 2]
  const { length } = x
  const convert = (l) => l.map((i) => String(i))
  const test = [{}, [], null, undefined, { a: 1 }, [1, 2]]
  console.log([convert(test), test])
}

const spread = () => {
  const x = { a: 1, b: 2, c: 3, d: 4 }
  const y = [1, 2, 3, 4, 5, 6]
  const z = [...y, 7]
  const { a, ...b } = x
  const [n, m, ...k] = y
  const rest = (...x) => {
    console.log(x)
  }
  rest(1, 2, 3, 4)
}

const uselessClass = () => {
  // strict
  const Useless = class {
    minAge = 21
    #minHeigth
    constructor(firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
    }
    static staticField = '??'
    get name() {
      return this.firstname + this.lastname
    }
    getName() {
      return this.firstname
    }
  }

  class Uselesser extends Useless {
    constructor(firstname, lastname) {
      super(firstname, lastname)
    }
  }
  const test = new Useless('m', 'p')
  const test2 = new Uselesser('n', 'f')

  console.log(typeof Useless)
  console.log(test.name)
  console.log(test.getName())
  console.log(Useless.staticField)
  console.log(test2.name)
}

const eventLoop = () => {
  const promise1 = () =>
    new Promise((resolve) => {
      resolve('1')
    })
  const promise2 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('2')
      })
    })
  const promise3 = () =>
    new Promise((resolve) => {
      resolve('3')
    })
  console.log('start')
  setTimeout(() => {
    console.log('timeout1')
  })
  promise1().then((r) => console.log(r))

  setTimeout(() => {
    console.log('timeout2')
  })

  promise2().then((r) => console.log(r))
  promise3().then((r) => console.log(r))
  console.log('finish')
}

const deepAndShallowCopy = () => {
  const x = [1, '1', false, Symbol('m'), null, undefined, [[1, 2]], {}, () => null]
  const y = [...x]
  const z = JSON.parse(JSON.stringify(x))
  y[6][0] = 'y'
  console.log('y', x[6])
  z[6][0] = 'z'
  console.log('z', x[6])
  y[6] = 'yy'
  z[6] = 'xx'
  console.log('final', x[6], y[6], z[6])
}

const incrementAndDecrement = () => {
  let x = 1
  let y = 2
  console.log(x++, ++y, x, y, y--, --x, x, y)
}

const unray = () => {
  const x = '1'
  const y = '+0123'
  const z = '1a'
  console.log(+x, -y, +z)
}

const Void = () => {
  let s = 0
  const x = void (function x() {
    console.log('evaluated')
  })()
  const y = void ++s || void s++
  console.log(y)
  console.log(s)
}

const This = () => {
  const x = {
    a: 1,
    b: () => console.log(this.a),
    c: function () {
      console.log(this.a)
    },
  }
  x.c()
  console.log(this.document)
  console.log(this)
}

const PromiseReslove = async () => {
  const async1 = async (x) => {
    console.log('argument:', x)
    try {
      const result = await Promise.resolve(x)
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
  async1(Promise.reject('reject'))
    .then((r) => console.log(r))
    .catch((e) => console.error(e))
  async1(
    new Promise((resolve) => {
      setTimeout(() => resolve('timeout 1sec'), 1000)
    })
  )
    .then((r) => console.log(r))
    .catch((e) => console.error(e))
  async1('string')
    .then((r) => console.log(r))
    .catch((e) => console.error(e))
  console.log(
    'newPromise',
    await Promise.resolve(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('error')
        }, 1000)
      })
    ).catch((e) => e)
  )
}

const testAwait = async () => {
  const t = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('error')
      }, 1000)
    })
  const result = await t().catch((e) => e)
  console.log(result)
}
