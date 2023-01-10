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
  console.time()
  const [result1, result2] = await Promise.all([promise1(), promise2()])
  console.timeEnd()
  console.time()
  try {
    const [result1, result2] = await Promise.all([promise1(), promise3()])
    console.log(result1, result2)
  } catch (error) {
    console.error(error)
  }
  console.timeEnd()
  /* const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)]
  const p = Promise.all(resolvedPromisesArray)
  console.log(p)
  setTimeout(() => {
    console.log('the queue is now empty')
    console.log(p)
  }) */
}
