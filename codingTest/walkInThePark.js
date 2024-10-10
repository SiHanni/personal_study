// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/172928
// 해당 문제를 통해 배운 것
// 행렬을 다루는 방식에 대한 이해
// 상태 관리 (validMove)
function solution(park, routes) {
  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  // 풀이 사고 흐름: 시작 위치 지정 -> 이동 -> 예외 처리
  let startX, startY;
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes('S')) {
      startX = i;
      for (let j = 0; j < park[i].length; j++) {
        if (park[i][j].includes('S')) {
          startY = j;
        }
      }
    }
  }
  // 위의 부분은 이후 chatGPT의 도움을 통해 아래와 같이 개선되었다.
  // for (let i = 0; i < park.length; i++){
  //     const idx = park[i].indexOf('S');
  //     if (idx !== -1){
  //         startX = i;
  //         startY = idx;
  //         break;
  //     }
  // }
  // 시간 복잡도 O(H * W) -> O(H + W)
  // includes 2회 -> 1회
  // 중첩 루프로 인한 가독성 저하 개선
  let x = startX;
  let y = startY;

  for (const route of routes) {
    const [direction, stepStr] = route.split(' ');
    const steps = parseInt(stepStr);
    const [dx, dy] = directions[direction];

    let newX = x;
    let newY = y;
    let validMove = true;

    for (let i = 0; i < steps; i++) {
      newX += dx;
      newY += dy;

      if (
        newX < 0 ||
        newX >= park.length ||
        newY < 0 ||
        newY >= park[0].length ||
        park[newX][newY] === 'X'
      ) {
        validMove = false;
        break;
      }
    }
    if (validMove) {
      x = newX;
      y = newY;
    }
  }
  return [x, y];
}
