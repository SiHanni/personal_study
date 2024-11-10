// 두개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

// 정수로 이루어진 배열이 주어지고, 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 "모든" 수를 배열에 오름 차순으로 담아 리턴하는 함수

// 간단히만 생각하면 반복문 한줄 시간복잡도 n^2에 끝낼수는 있을것
function solution(numbers) {
    let answer = [];
    let sortedArr = numbers.sort((a, b) => a - b)
    console.log(sortedArr)
    for (let i = 0; i < numbers.length - 1; i++){
        for (let j = i + 1; j < numbers.length; j ++){
            let sum = sortedArr[i] + sortedArr[j]
            if (!answer.includes(sum)){
                answer.push(sum)
            }
        }
    }
    console.log(answer)
    return answer;
}

// 하지만 배열이 길어지면 길어질수록 처리 시간이 너무 길어질 것 같다.
// 좀 더 생각을 해보자.


function solution(numbers) {
    let answer = new Set();

    for (let i = 0; i < numbers.length - 1; i++){
        for (let j = i + 1; j < numbers.length; j ++){
            answer.add(numbers[i] + numbers[j])
        }
    }
    let answerArr = Array.from(answer).sort((a, b) => a - b)
    return answerArr;
}

// set 활용
// includes 제거해서 배열 확인 제거