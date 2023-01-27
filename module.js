document.getElementById('x').innerHTML = localStorage.getItem('x') || '0'

const state = () => {
  let x = Number(localStorage.getItem('x')) || 0
  const sync = () => {
    document.getElementById('x').innerHTML = x
    localStorage.setItem('x', x)
  }
  const increase = () => {
    x += 1
    sync()
  }
  const get = () => {
    return x
  }
  const reset = () => {
    if (x !== 0) {
      x = 0
      sync()
    }
  }
  return { increase, get, reset }
}

const { increase, get, reset } = state()
