function solution(arr) {
  const min = Math.min(...arr)

  const find = arr.findIndex(num => num === min)

  arr.splice(find, 1)

  if (arr.length > 0) {
    return arr
  }
  return [-1]
}