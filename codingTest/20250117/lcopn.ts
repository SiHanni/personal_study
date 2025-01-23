// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

function letterCombinations(digits: string): string[] {
  const buttonMap = new Map<string, string[]>([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'm', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ]);

  if (digits === '') {
    return [];
  }

  let result: string[] = [''];

  for (const digit of digits) {
    const chars = buttonMap.get(digit)!;
    const temp: string[] = [];
    for (const combination of result) {
      for (const char of chars) {
        temp.push(combination + char);
      }
    }
    result = temp;
  }
  return result;
}

console.log(letterCombinations('23'));
console.log(letterCombinations(''));

// 이건 느낀 바가 좀 많다
// 왜 이런 생각을 바로 해내지 못하지?
// 곱해야할 기준을 먼저 만들고, 그 기준을 갱신시켜버리면 되는건데
