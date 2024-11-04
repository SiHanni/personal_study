// 완전 탐색
// Brute Force Search
// 가능한 모든 경우의 수를 전부 탐색하여 해결책을 찾는 방법
// 효율성 측면에선 최적의 방법이 아닐 수 있다.

// 예제: 카페트
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const carpet = brown + yellow;

  for (let x = 1; x <= carpet; x++) {
    if (carpet % x === 0) {
      let y = carpet / x;
      if (x >= y && (x - 2) * (y - 2) === yellow) {
        return [x, y];
      }
    }
  }
}
