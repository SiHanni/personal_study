// https://leetcode.com/problems/reverse-integer/

function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const str = Math.abs(x).toString();

  const revStr = str.split('').reverse().join('');

  const answer = sign * parseInt(revStr);
  return answer;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
