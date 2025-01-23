// 이번엔 입력을 두 줄에 거쳐 받는 경우를 살펴보자
//const input2 = require('fs').readFileSync('dev/stdin').toString().split('\n');

function multiply(a: number, b: number) {
  let answer = 0;
  for (let i = a.toString().length - 1; i >= 0; i--) {
    const strB = b.toString();
    answer += a * Number(strB[i]) * 10 ** (a.toString().length - i - 1);
  }
  return answer;
}

console.log(multiply(472, 385));
