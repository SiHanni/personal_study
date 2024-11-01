// 완주하지 못한 선수
// 해시를 활용해서 풀 것

// 해시를 쓰는 목적과 장점
// 해시는 키-쌍으로 이루어져 데이터를 저장하며 데이터를 빠르게 찾는데 용이하다.

function solution(participant, completion) {
  let result = {};
  for (let person of participant) {
    result[person] = result[person] ? result[person] + 1 : 1;
  }
  for (let person of completion) {
    if (result[person]) {
      result[person] -= 1;
    }
  }
  for (let key in result) {
    if (result[key] > 0) {
      return key;
    }
  }
}
