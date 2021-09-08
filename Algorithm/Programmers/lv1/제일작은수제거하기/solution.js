function solution(arr) {
  // Math.min을 사용하여 가장 작은 수를 뽑는다.
  let minNum = Math.min(...arr);
  console.log(minNum);
  // minNum의 인덱스를 뽑아낸다.
  let minIndex = arr.findIndex(min => min === minNum);
  // minIndex 를 제거한다.
  let result = arr.splice(minIndex, 1);
  if (arr.length > 0) return arr;
  else return [-1];
}