//leetcode.com/problems/plus-one/description/

function plusOne(digits: number[]): number[] {
  return (BigInt(digits.join('')) + 1n).toString().split('').map(Number);
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// 오늘의 정보: 자바스크립트는 15자리 이상의 정수를 정확히 처리할수없어서 근사치로 표현해버린다!!!!!!!
// 그래서 BigInt로 써줘야한다.
