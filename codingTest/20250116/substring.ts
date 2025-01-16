// leetcode : https://leetcode.com/problems/longest-substring-without-repeating-characters/

// substring 문제는 슬라이딩 윈도우로 풀자
// 슬라이딩 윈도우: 배열이나 문자열에서 하위 구간을 효율적으로 계산하기 위해 사용된다.
// 윈도우 : 배열이나 문자열의 "특정 구간"을 윈도우로 간주 한다. 예를 들어, 배열 [1, 2, 3, 4, 5]에서 [2, 3, 4]는 윈도우입니다.
// 슬라이딩 : 윈도우를 데이터의 시작부터 끝까지 한 칸씩 이동시키며 작업을 수행 . 예를 들어, [1, 2, 3] -> [2, 3, 4] -> [3, 4, 5].

function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let start = 0;

  const seen = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (seen.has(char) && seen.get(char)! >= start) {
      start = seen.get(char)! + 1;
    }
    seen.set(char, end);

    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

// 테스트
console.log(lengthOfLongestSubstring('abcabcbb')); // 결과: 3 ("abc")
console.log(lengthOfLongestSubstring('bbbbb')); // 결과: 1 ("b")
console.log(lengthOfLongestSubstring('pwwkew')); // 결과: 3 ("wke")

// 슬라이딩 윈도우의 포인트 : 배열이나 문자열에서 특정 구간에 대해 연산이 필요할때, "한칸씩" 이동시키며 작업을 수행할 수 있다.
