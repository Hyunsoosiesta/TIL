function solution(s, n) {
  // 알파벳을 문자열 생성
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = upper.toLowerCase();
  let result = '';

  // s = "AB" n = 1 인 경우 => "BC" 를 리턴
  // s의 요소가 대문자인지 소문자인지 구분
  // 반복문으로 s 돌리고, include upper / lower 구분
  // s 요소의 각 인덱스를 뽑아야함
  for (let index = 0; index < s.length; index++) {
    let sLetter = s[index]; // 해당 요소를 뽑음 우선 A부터 시작 s[0]
    //  s[0] 이 upper 인지 lower인지 구분
    //  upper인 경우 result 에 upper[index + n]
    //  upper or lower에서의 s의 인덱스를 구해라 => sIndex = upper.indexOf(sLetter) 
    //  sIndex가 26을 넘는 경우는 (index + n % 26) 인 요소가 들어가게됨
    //  1. sLetter[index]가 공백인 경우
    if (sLetter === ' ') {
      result += ' ';
      continue;
    }
    let sIndex;
    // 2. sLetter[index]가 대문자인 경우
    if (upper.includes(sLetter)) {
      sIndex = upper.indexOf(String(sLetter)) + n;
      if (sIndex + n > 26) {
        sIndex %= 26;
      }
      result += upper[sIndex];
    }
    // 3. s[index]가 소문자인 경우
    else if (lower.includes(sLetter)) {
      sIndex = lower.indexOf(String(sLetter)) + n;
      if (sIndex + n > 26) {
        sIndex %= 26;
      }
      result += lower[sIndex]
    }
  }
  return result;

}