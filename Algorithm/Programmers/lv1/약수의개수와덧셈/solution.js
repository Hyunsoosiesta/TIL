function solution(left, right) {
  // 약수의 개수가 짝수인 수 : 더하고
  // 약수의 개수가 홀수인 수 : 빼세요
  // left ~ right 까지의 수를 모두 나열하고
  let result = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) result -= i;
    else result += i;
  }
  return result;

}

// 제곱수가 자연수라면 그 수의 약수의 개수는 홀수개
// 제곱수가 자연수가 아니라면 짝수개