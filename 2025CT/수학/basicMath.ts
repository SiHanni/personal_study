// 쉬운 문제라도 일단 풀려고 하는 편임.
// 그렇다고 너무 쉬운걸 풀면 좀 그런가 싶기도 하다
const fs = require('fs');
const inputData = fs.readFileSync('dev/stdin').toString().split(' ');
console.log(Number(inputData[0]) + Number(inputData[1]));
