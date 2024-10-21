// 큐와 스택
// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

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
