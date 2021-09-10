function solution(nums) {
  let arr = [];
  // 3중 루프 숫자 3개 뽑아 배열로 만들고 다시 arr에 푸쉬
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push([nums[i], nums[j], nums[k]])
      }
    }
  }
  // 더해서 소수인 배열의 개수 확인하기

  let cnt = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    let sum = arr[idx].reduce((a, b) => a + b, 0);
    // 소수 판별 함수를 만들고
    const isPrime = function () {
      for (let i = 2; i < sum; i++) {
        if (sum % i === 0) return false;
      }
      return true;
    }
    // sum이 소수이면 cnt++ 
    if (isPrime(sum) === true) cnt++;
  }
  return cnt;
}