function solution(n) {
  // 소수판별 함수 먼저 만들고 boolean 값에 따라 cnt++ 하고 리턴하기
  let cnt = 0;
  // 소수판별 함수 만들기
  const isPrime = function (num) {
    let sqrt = parseInt(Math.sqrt(num));
    if (num === 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
  // numArr의 요소들 중에 isPrime === true 인 값의 총 개수를 ++해서 리턴함
  for (let num = 2; num <= n; num++) {
    if (isPrime(num)) cnt++
  }
  return cnt;
}