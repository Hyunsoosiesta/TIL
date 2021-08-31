function solution(phone_number) {
  let result = '';
  let first = phone_number.slice(0, -4);
  let last = phone_number.slice(-4);
  for (let i = 0; i < first.length; i++) {
    result += '*'
  }
  return result + last;
}