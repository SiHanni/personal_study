// 숫자 짝꿍
// https://school.programmers.co.kr/learn/courses/30/lessons/131128

// 1차 답안
function solution(X, Y) {
  let answer = []; // 공통수를 담는다.
  let arrY = Y.split('').sort((a, b) => a - b);
  for (let i = 0; i < X.length; i++) {
    // 만약에 Y에 있다면 answer에 X를 넣어주고
    // Y는 filter를 통해서 같은걸 제외하고 다시 만듭니다.
    if (arrY.includes(X[i])) {
      answer.push(X[i]);
      arrY.splice(arrY.indexOf(X[i]), 1);
    }
  }

  return answer.length === 0
    ? '-1'
    : String(Number(answer.sort((a, b) => b - a).join('')));
}
// 정답률 47%

// 개선 답안
// 해당 문제는 빈도수로 해결하는 것이 좋다.
function solution(X, Y) {
  const answer = [];
  const cntY = Array(10).fill(0);

  for (const num of Y) {
    cntY[num]++;
  }
  for (const num of X) {
    if (cntY[num] > 0) {
      answer.push(num);
      cntY[num]--;
    }
  }
  if (answer.length === 0) return '-1';
  answer.sort((a, b) => b - a);
  const result = answer.join('');

  return result[0] === '0' ? '0' : result;
}

// 평소에 잘 쓰지 않아 생소했던 메서드
// 1. fill()
