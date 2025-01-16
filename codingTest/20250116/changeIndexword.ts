export function replaceCharacter(
  inputString: string,
  char1: string,
  char2: string
): string {
  // TODO: Replace all occurrences of character `char1` in `inputString` with `char2`
  let answer = '';
  for (const word of inputString) {
    if (word === char1) {
      answer += char2;
    } else {
      answer += word;
    }
  }
  return answer;
}

console.log(replaceCharacter('hello, world', 'o', 'a'));
