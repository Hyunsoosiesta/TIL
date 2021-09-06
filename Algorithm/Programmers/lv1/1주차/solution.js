function solution(price, money, count) {
  // price 가 count 번 더해지는데 price 는 price * (n + 1)
  // absoulte money - price * count를 해주면 됨!
  let priceArr = []; // [3, 6, 9, 12]
  // 반복문으로 price를 x1 x2 x3.. 하면서 count수만큼 곱해서 배열로 보냄
  for (let i = 1; i <= count; i++) {
    priceArr.push(price * i)
  }
  let sum = priceArr.reduce(function (prev, curr) {
    return prev + curr
  }, 0)

  if (sum <= money) {
    return 0;
  } else {
    return sum - money
  }
}