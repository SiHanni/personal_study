// https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(s: string): number {
  const romanNumerals = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let answer: number = 0;
  let prevValue: number = 0; // 이전 값 저장

  for (const char of s) {
    const currentValue = romanNumerals.get(char)!; // 현재 문자에 해당하는 값

    if (currentValue > prevValue) {
      // 현재 값이 이전 값보다 크면 (예: IV -> 5 - 1)
      answer += currentValue - 2 * prevValue; // 이전에 더한 값을 빼고, 현재 값을 추가
    } else {
      // 그렇지 않으면 그냥 더하기
      answer += currentValue;
    }

    prevValue = currentValue; // 이전 값 갱신
  }

  return answer;
}

console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('III'));
//법칙이 있음
//다음 숫자가 앞에숫자보다 작으면 더하고
//다음 숫자가 앞에숫자보다 크면 뺴줘야함
