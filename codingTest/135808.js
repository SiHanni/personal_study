// 과일 장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808
// 


// 1차 답안
function solution(k, m, score) {
    const sortedScore = score.sort((a, b)=> b - a);
    
    answer = 0
    for (let i = 0; i < score.length; i += m){
        let box = []
        for (let j = 0; j < m; j++){
            if (i + j < sortedScore.length){
                box.push(sortedScore[i+j])
            }
            
        }
        if (box.length === m){
            answer += Math.min(...box) * m
        }
        
    }

    return answer
}

// 개선 답안
// 반복문 인덱스 개선
function solution(k, m, score) {
    score.sort((a, b) => b - a); // 내림차순 정렬
    let answer = 0;

    for (let i = m - 1; i < score.length; i += m) {
        answer += score[i] * m;
    }

    return answer;
}

