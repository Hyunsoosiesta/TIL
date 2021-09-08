function solution(d, budget) {
  // d 배열의 합이 budget과 작거나 같으면 그대로  d.length 리턴
  // d 배열의 합이 budget보다 크면 ...d.sort() 오름차순으로 정렬하고
  let result = [];
  // result에 push하고 result의 총합이 budget을 초과하는 경우 result.length 를 리턴한다.
  let sum = result.reduce((a, b) => a + b, 0)  // sum = 6
  if (sum > budget) {
    let sum = result.reduce((a, b) => a + b, 0)  // sum = 6

    return result.length
  }
  else {
    for (let i = 0; i < d.length; i++) {
      let sorted = d.sort(); // [1, 2, 3, 4, 5];
      result.push(sorted[i]); // result = [1, 2, 3]
    }
    return result.length;
  }

}

let output = solution([1, 3, 2, 5, 4], 9);
console.log(output);