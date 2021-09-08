// < 반복문 >
// d를 오름차순으로 정렬하고
// d의 요소들을 더한 값을 넣을 기본값 0인 sum 변수를 만들고,
// 요소의 합이 budget보다 커지면 break
// result 의 횟수를 리턴함
function solution(d, budget) {
  let result = 0;
  let sum = 0;
  let sorted = d.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i]; // sum  = 1
    if (budget < sum) break;
    result++; // break전에 result++ 이 되면 안됨!!
  }
  return result;

}