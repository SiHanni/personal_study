// 기능 개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586


function solution(progresses, speeds) {
    const days = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );
    console.log(days)
    let result = [];
    let maxDay = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++){
        if (days[i] <= maxDay){
            count ++;
        } else {
            result.push(count);
            count = 1;
            maxDay = days[i]
        }
    }
    result.push(count)
    
    return result;
}

