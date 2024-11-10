// 숫자의 표현
// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        result++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return result;
}

// O(n^2)는 일부 케이스에서 시간 초과가 뜸
// n - (k * (k - 1) / 2) 이런 공식이 있다고 한다...
function solution(n) {
  let result = 0;

  for (let k = 1; (k * (k - 1)) / 2 < n; k++) {
    if ((n - (k * (k - 1)) / 2) % k === 0) {
      result++;
    }
  }

  return result;
}
