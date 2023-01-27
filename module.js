const closure = () => {
  let x = 0
  const increase = () => {
    x += 1
  }
  const get = () => {
    return x
  }
  return { increase, get }
}

const { increase, get } = closure()
