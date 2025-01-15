export function findVowelPositions(s: string): number[] {
  // TODO: implement findVowelPositions without using any built-in string methods
  const answer: number[] = [];
  const vowel: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < s.length; i++) {
    for (const a of vowel) {
      if (s[i] === a) {
        answer.push(i);
      }
    }
    //if (vowel.includes(s[i])){
    //    answer.push(i)
    //}
  }
  //console.log(s, answer)
  return answer;
}
