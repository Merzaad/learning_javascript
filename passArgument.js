const passByValue = () => {
  let x = 0
  const promise = (state) => {
    // copy of argument value
    return new Promise((resolve) => {
      setTimeout(() => resolve(state), 2000)
    })
  }

  const promise2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(x), 2000)
    })
  }
  const print = (state) => {
    setTimeout(() => console.log(state), 2000)
  }
  promise(x).then((result) => console.log(result, x))
  promise2().then((result) => console.log(result, x))
  print(x)
  x++
}

const passByRefrence = () => {
  let x = { value: 0 }
  const promise = (state) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(state.value), 2000)
    })
  }

  const promise2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(x.value), 2000)
    })
  }
  const print = (state) => {
    setTimeout(() => console.log(state.value), 2000)
  }
  promise(x).then((result) => console.log(result, x.value))
  promise2().then((result) => console.log(result, x.value))
  print(x)
  x.value++
}

passByValue()
