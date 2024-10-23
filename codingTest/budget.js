// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let applyCnt = 0;
  let currentApply = 0;
  for (let i = 0; i < d.length; i++) {
    currentApply += d[i];
    if (currentApply <= budget) {
      applyCnt = i + 1;
    } else {
      return applyCnt;
    }
  }
  return applyCnt;
}
