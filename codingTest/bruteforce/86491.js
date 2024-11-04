// 최소 직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 1차 답안
function solution(sizes) {
  const answer = [0, 0];
  for (const size of sizes) {
    size.sort((a, b) => b - a);
    if (size[0] > answer[0]) {
      answer[0] = size[0];
    }
    if (size[1] > answer[1]) {
      answer[1] = size[1];
    }
  }
  return answer[0] * answer[1];
}

// 개선 답안
// 개선 내용 sort메서드는 시간복잡도가 nlogn 이라고 함.

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (const [w, h] of sizes) {
    const [bigger, smaller] = w > h ? [w, h] : [h, w];
    maxWidth = Math.max(maxWidth, bigger);
    maxHeight = Math.max(maxHeight, smaller);
  }

  return maxWidth * maxHeight;
}
