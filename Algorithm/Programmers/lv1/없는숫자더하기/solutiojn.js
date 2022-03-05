function solution(numbers) {
    let result = 0;
    for (let i = 0; i < 10; i++ ) {
        // numbers 배열에서 해당되지 않은 숫자들을 더한 값을 리턴한다.
        if (!numbers.includes(i)) {
            result += i;
        }
    }
    return result;
}