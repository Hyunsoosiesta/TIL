function solution(a, b) {
  // for loop 을 이용한 반복 => a[i] * b[i] 값을 구한 다음
  // 위의 값들을 i가 끝날 때까지 계속 더한 sum의 값을 최종으로 리턴
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}
