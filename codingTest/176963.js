// 추억 점수
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

// 데이터 관리 -> map 

// 풀이 1 (O(n^2))
function solution(name, yearning, photo) {
    const score = []
    for (const p of photo){
        let missingPoint = 0
        for (const n of p){
            if (name.includes(n)){
                const point = yearning[name.indexOf(n)]
                missingPoint += point
            }
        }
        score.push(missingPoint)
    }
    return score
}
// 테스트 11 〉	통과 (2.84ms, 34.2MB)

// 풀이 2 (n*m)
function solution(name, yearning, photo) {
    const yearningMap = {};
    for (let i = 0; i < name.length; i++) {
        yearningMap[name[i]] = yearning[i];
    }
    
    const scores = photo.map(p => {
        return p.reduce((total, person) => total + (yearningMap[person] || 0), 0)
    })
    return scores
}
// 테스트 11 〉	통과 (0.86ms, 33.2MB)