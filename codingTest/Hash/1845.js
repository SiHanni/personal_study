// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const m = {};

  for (const num of nums) {
    m[num] = (m[num] || 0) + 1;
  }
  const unique = Object.keys(m).length;
  const half = nums.length / 2;

  return Math.min(unique, half);
}
