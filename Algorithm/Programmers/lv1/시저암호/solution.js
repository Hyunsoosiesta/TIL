function solution(s, n) {
  // 1. 알파벳 배열 만들기
  let lower = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let upper = lower.toUpperCase();
  let result = '';

  // 2. 공백, lower.length 넘어갔을 때 처리
  //. s = "AB",  n = 1  => return "BC"
  for (let idx = 0; idx < s.length; idx++) {
    let letter = s[idx]; // s = "A", "B"
    if (letter === ' ') {
      result += ' ';
      continue;
    }
    let sIndex;
    if (upper.includes(letter)) {
      sIndex = upper.indexOf(String(letter)) + n
      result += upper[sIndex];
    }
    else if (lower.includes(letter)) {
      sIndex = lower.indexOf(String(letter)) + n
      result += lower[sIndex];
    }
  }
  return result;
}