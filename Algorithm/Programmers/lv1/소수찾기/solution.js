function solution(n) {
  const arr = [];

  // n이하의 모든 자연수를 arr에 담는다.
  for (let i = 1; i <= n; i++) arr.push(i);

  // 자신을 제외하고, 배수를 지워가는 로직
  // n = 10인 경우, arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // arr[i]가 존재하는 경우
  // num에 arr[i]를 저장하고
  // 반복 돌림 
  for (let i = 1; i * i <= n; i++) {
    if (arr[i]) {
      let num = arr[i];
      for (let j = num * num; j <= n; j += num) {
        arr[j - 1] = 0;
      }
    }
  }

  let result = arr.filter((number) => number); // 0 제외 요소들만 새 배열로
  result.shift();
  return result.length;
}

solution(10)
/*
  let count = 0;
    for (let i = 2;  i <= n; i++) {
      if(i === 2) {
          count++
      }
      if(i % 2 === 0) {
          continue;
      }
      if (i % (Math.sqrt(i)) === 0) {
          continue;
      }
       count++
    }
    return count
*/