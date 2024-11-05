// 콜라츠 추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

// 다양한 while 문법의 활용

// 답안 1  do- while
function solution(num) {
  if (num === 1) return 0;

  let cnt = 0;
  do {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    cnt += 1;
    if (cnt >= 500) return -1;
  } while (num !== 1);

  return cnt;
}

// 답안 2
function solution(num) {
  if (num === 1) return 0;

  let cnt = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    cnt += 1;
    if (cnt >= 500) return -1;
  }

  return cnt;
}
