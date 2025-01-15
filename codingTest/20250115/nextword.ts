export function solution(s: string): string {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (lowerAlphabet.includes(s[i])) {
      const index = lowerAlphabet.indexOf(s[i]);
      answer += lowerAlphabet[(index + 1) % lowerAlphabet.length];
    } else if (upperAlphabet.includes(s[i])) {
      const index = upperAlphabet.indexOf(s[i]);
      answer += upperAlphabet[(index + 1) % upperAlphabet.length];
    } else {
      answer += s[i];
    }
  }
  console.log(answer);
  return 'true';
}

console.log(solution('abc123XYz!'));
