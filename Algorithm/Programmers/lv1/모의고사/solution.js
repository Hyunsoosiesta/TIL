function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let rightAnswers = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) rightAnswers[0] += 1;
    if (two[i % two.length] === answers[i]) rightAnswers[1] += 1;
    if (three[i % three.length] === answers[i]) rightAnswers[2] += 1;
  }

  let max = Math.max(...rightAnswers);
  console.log(max);
  let result = [];
  for (let i = 0; i < rightAnswers.length; i++) {
    if (rightAnswers[i] === max) {
      result.push(i + 1)
    }
  }
  return result;

}