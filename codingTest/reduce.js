// reduce 메서드의 활용
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

array.reduce(callback, initialValue)


// 기본적으로 배열의 모든 요소를 하나씩 순회하며 누적 작업을 수행하는 것이다.
// callback: 배열의 각 요소에 대해 실행할 함수로, 네 개의 매개변수를 받을 수 있다.
// 1. accumulator : 이전 함수 호출의 반환값을 저장, 최종 결과를 반환
// 2. currentValue
// 3. index: 현재 요소의 인덱스
// 4. array ( 선택 사항 )
// initialValue : accumulator의 초기값을 지정한다. 생략할 경우 배열의 첫 번째 요소가 accumulator이 된다.

function solution(a ,b){
    return a.reduce((acc, currentValue, index) => acc + currentValue * b[index], 0)
}

// acc는 누적값, currentValue는 배열 a의 현재 요소, index를 통해 b의 같은 인덱스 값을 접근 후 두 값을 곱한 결과를 누적
// 0은 reduce의 초깃값을 0으로 설정
// 즉, acc의 초깃값을 0으로 설정한다는 의미

// 단계별 동작 설명
// 초기 상태: acc의 초기값을 0으로 설정합니다.
// 
// 첫 번째 순회 (currentValue = 1, index = 0):
// 
// acc = 0 + (1 * -3) = -3
// 두 번째 순회 (currentValue = 2, index = 1):
// 
// acc = -3 + (2 * -1) = -5
// 세 번째 순회 (currentValue = 3, index = 2):
// 
// acc = -5 + (3 * 0) = -5
// 네 번째 순회 (currentValue = 4, index = 3):
// 
// acc = -5 + (4 * 2) = 3
// 모든 요소를 순회한 후, 최종적으로 acc는 3이 됩니다.

// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.7MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.09ms, 33.5MB)
// 테스트 8 〉	통과 (0.09ms, 33.5MB)
// 테스트 9 〉	통과 (0.08ms, 33.5MB)


// reduce를 쓰지 않았을 경우
function solution(a, b) {
    if (a.length = b.length){
        let innerP = 0
        for (let i = 0; i < b.length; i++){
            innerP += (a[i] * b[i])
        }
        return innerP
    }
}

// 테스트 1 〉	통과 (0.13ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.6MB)
// 테스트 7 〉	통과 (0.10ms, 33.4MB)
// 테스트 8 〉	통과 (0.10ms, 33.5MB)
// 테스트 9 〉	통과 (0.09ms, 33.4MB)