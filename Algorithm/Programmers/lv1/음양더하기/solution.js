function solution(absolutes, signs) {
  // absoultes : 어떤 정수들의 절대값 배열
  // signs : 정수들의 부호를 차례대로 담은 불리언 배열
  let arr = [];
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === true) arr.push(absolutes[i])
    else if (signs[i] === false) arr.push(-absolutes[i])
  }
  return arr.reduce((a, b) => a + b)
}