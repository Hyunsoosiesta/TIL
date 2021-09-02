function solution(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let arr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      let sum = arr1[i][j] + arr2[i][j]; // sum = 4
      arr.push(sum); // arr = [4]
    }
    result.push(arr); // result = [4]
  }
  return result;
}

// double loop 스코프를 잘 확인하자!