// < method 2 : 반복문 풀이 >
// d 배열 요소의 총합이 budget과 같거나 작으면 그대로 d.length를 리턴함
// 그렇지 않다면,
// d를 내림차순으로 정렬하고
// 요소를 차례대로 result 배열에 넣음
// result 배열의 요소들을 더하는 sum 변수를 만들고,
// 요소의 합이 budget과 같아지면 while문 탈출
// result배열의 길이를 리턴
function solution(d, budget) {
  let dSum = d.reduce((a, b) => a + b, 0);
  if (dSum <= budget) return d.length;
  else {
    let sorted = d.sort((a, b) => a - b); // [5, 4, 3, 2, 1]
    let result = [];
    let sum = 0;
    let i = 0;
    for (let i = 0; i < sorted.length; i++) {
      sum += sorted[i];
      result.push(sorted[i]);
      if (sum > budget) break;

    }
    return result.length - 1;
  }
}