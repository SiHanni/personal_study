// 다음 큰 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

// toString(2) 를 사용하면 이진수 문자열을 반환한다.
// filter() 문자열에서 특정 조건을 만족하는 문자열로 반환한다.

function solution(n) {
  nOneCnt = n
    .toString(2)
    .split('')
    .filter(num => num === '1').length;
  nextNum = n + 1;
  while (true) {
    binaryOneCnt = nextNum
      .toString(2)
      .split('')
      .filter(num => num === '1').length;
    if (nOneCnt === binaryOneCnt) {
      return nextNum;
    }
    nextNum += 1;
  }
}
