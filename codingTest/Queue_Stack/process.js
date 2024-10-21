// 큐와 스택
// Queue 관련 메소드
// push() : 배열의 끝에 요소를 추가한다. 
// shift() : 배열의 앞에서 요소를 제거하고 반환한다. 
// pop() : 배열의 끝에서 요소를 제거하고 반환한다.
// 프로세스
// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({ priority, index }));
    let printOrder = 0; 

    while (queue.length > 0) {
        let currentProcess = queue.shift();

        if (queue.some(process => process.priority > currentProcess.priority)) {
            queue.push(currentProcess);
        } else {
            printOrder += 1; 
            if (currentProcess.index === location) {
                return printOrder;
            }
        }
    }
}

// some() 메소드
// 1. 첫번째로 조건을 만족하는 요소를 찾으면 즉시 종료하고 true를 반환한다.
// 2. 배열이 비어 있는 경우 항상 false를 반환한다.
// 3. 배열의 모든 요소가 조건을 만족하지 않으면 false를 반환한다.
// 4. 짧은 회로 평가: 배열을 처음부터 끝까지 순회하지 않고, 조건을 만족하는 요소가 나오면 즉시 중단한다.

// 성능 : 큰 배열일수록 효율적이다.
