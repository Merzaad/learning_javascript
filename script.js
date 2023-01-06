const nullishCoalescin = () => {
  let a 
  const x = { a: 1 }
  const y = x.b
  const z = x.b ?? 'bbb'
  // const t = true && null ?? x.a '&&' and '??' operations cannot be mixed without parentheses.
  const t = (null || a) ?? 'ttt'
  console.log(a, x, y, z, t)
}
nullishCoalescin()
