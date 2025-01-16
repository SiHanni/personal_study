export function solution(inputString: string): string {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let answer = '';
  for (let i = 0; i < inputString.length; i++) {
    console.log(inputString[i]);
    if (lowerAlphabet.includes(inputString[i])) {
      const index = lowerAlphabet.indexOf(inputString[i]);
      answer += upperAlphabet[index];
    } else if (upperAlphabet.includes(inputString[i])) {
      const index = upperAlphabet.indexOf(inputString[i]);
      answer += lowerAlphabet[index];
    } else {
      answer += inputString[i];
    }
  }

  return answer;
}

console.log(solution('HelLo WoRld 123'));
