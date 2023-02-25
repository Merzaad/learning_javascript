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

const promiseAll = async () => {
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

spread()
