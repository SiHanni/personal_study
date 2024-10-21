// 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 최초 작성 코드
function solution(arr) {
  let answer = [];
  while (arr.length > 0) {
    const p = arr.shift();
    const next = arr[0];

    if (p !== next) {
      answer.push(p);
    }
  }
  return answer;
}

// 효율성 통과 실패
// 원인: 큐 메서드를 최대한 사용하려 shift() 메서드를 사용했음.
// shift() 의 경우 배열의 첫번째 요소를 제거할 때 마다 남은 요소들을 모두 한칸씩 앞으로 이동하는데,
// 이로 인해 배열이 길어질수록 시간 복잡도가 증가하며, 최악의 경우 시간 복잡도가 O(n^2)까지 된다.

// 개선된 코드
function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      // 현재 요소와 다음 요소가 다르면 추가
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 그래도 시간초과가 발생함.
// 배열의 길이가 아주 클때 push()로 인해 메모리 재할당이 발생할수 있다고 한다.
// 배열의 순회를 최소화해야한다.

function solution(arr) {
  return arr.filter((value, index) => value !== arr[index + 1]);
}
