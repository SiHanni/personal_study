// 큐와 스택
// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

// 자료구조 : 데이터를 저장, 관리, 효율적으로 접근할 수 있는 방식이나 구조
// 스택 : Last In Fisrt Out
// 큐 : First In First Out
// 활용 메서드. push(), pop()
// shift() : 배열의 첫번째 요소를 제거하고, 그 값을 반환 (큐에 사용)

function solution(s) {
  let stack = [];
  for (let p of s) {
    if (p === '(') {
      stack.push(p);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

// " ( " 이면 스택에 push
// " ) " 이면 스택에서 pop
// 최종적으로 stack에는 아무것도 없어야 true
