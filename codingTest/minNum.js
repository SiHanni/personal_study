// 제일 작은 수 제거하기
// js 메서드를 활용을 잘 하는가
// https://school.programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
  if (arr.length === 1) return [-1];

  const min = Math.min(...arr);
  return arr.filter(num => num != min);
}

// 피드백: 평소에 filter을 많이 안써서 바로바로 떠올리지 못한다.
