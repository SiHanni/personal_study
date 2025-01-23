export function swapAdjacentPairs(s: string): string {
  // TODO: implement the solution here
  let answer = '';
  if (s.length % 2 === 0) {
    for (let i = 0; i < s.length; i++) {
      if (i % 2 !== 0) {
        answer += s[i];
        answer += s[i - 1];
      }
    }
  } else {
    for (let i = 0; i < s.length - 1; i++) {
      if (i % 2 !== 0) {
        answer += s[i];
        answer += s[i - 1];
      }
    }
    answer += s[s.length - 1];
  }
  return answer;
}

console.log(swapAdjacentPairs('abcdef'));
console.log(swapAdjacentPairs('hello'));

function swapAdjacentCharacters(s: string): string {
  let result = ''; // 결과 문자열 초기화
  for (let i = 0; i < s.length; i += 2) {
    if (i + 1 < s.length) {
      // 두 문자를 교환하여 추가
      result += s[i + 1] + s[i];
    } else {
      // 마지막 문자가 홀수인 경우 그대로 추가
      result += s[i];
    }
  }
  return result;
}
