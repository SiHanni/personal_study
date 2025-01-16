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
