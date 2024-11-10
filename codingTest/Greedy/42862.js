// 체육복
// Greedy


// splice()
// arr.splice(startIndex, deleteCount, item1, time2, ...)
// 시작인덱스, 지울 요소의 개수, 추가할 새로운 요소

// 처음 답안
function solution(n, lost, reserve) {
    let newLost = lost.filter(l => !reserve.includes(l))
    let newReserve = reserve.filter(r => !lost.includes(r))
    
    let answer = n - newLost.length
    newLost.forEach((l)=> {
        if(newReserve.includes(l-1)){
                console.log("case 1")
                answer += 1
                newReserve.splice(newReserve.indexOf(l - 1), 1)
        } else if (newReserve.includes(l+1)){
                console.log("case 2")
               answer += 1
               newReserve.splice(newReserve.indexOf(l + 1), 1)
        }
    })
    return answer
}

// 두개 케이스에서 계속 에러가 나서 gpt에 물어봤다.
// newReserve 배열을 탐색하면서 여벌 체육복을 다른 학생에게 대여할 때 대여 순서를 고려하지 않는 문제가 있을 수 있기 때문입니다. 
// 예를 들어, 바로 다음 학생이 빌려야 하는 경우를 놓치거나, 여벌 체육복을 가지지 않은 학생이 빌리지 못하는 상황이 발생할 수 있습니다.
function solution(n, lost, reserve) {
    let newLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b)
    let newReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b)
    
    let answer = n - newLost.length
    newLost.forEach((l)=> {
        if(newReserve.includes(l-1)){
                console.log("case 1")
                answer += 1
                newReserve.splice(newReserve.indexOf(l - 1), 1)
        } else if (newReserve.includes(l+1)){
                console.log("case 2")
               answer += 1
               newReserve.splice(newReserve.indexOf(l + 1), 1)
        }
    })
    return answer
}


// sort를 통해 새로운 배열들을 오름차순 정렬해서 낮은 인덱스의 학생부터 빌려갈 수 있게 조정했다.