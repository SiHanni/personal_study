//https://learn.codesignal.com/course/679/unit/1/practice/6

export function solution(inputString: string): boolean {
  // TODO: Implement the function to check whether the provided string is a palindrome or not.
  // 두 포인터 초기화
  let left = 0;
  let right = inputString.length - 1;

  while (left < right) {
    // 왼쪽 포인터가 알파벳/숫자가 아니면 이동
    while (left < right && !isAlphaNumeric(inputString[left])) {
      left++;
    }

    // 오른쪽 포인터가 알파벳/숫자가 아니면 이동
    while (left < right && !isAlphaNumeric(inputString[right])) {
      right--;
    }

    // 대소문자 무시 비교
    if (inputString[left].toLowerCase() !== inputString[right].toLowerCase()) {
      return false;
    }

    // 포인터 이동
    left++;
    right--;
  }

  // 모든 비교가 성공하면 true 반환
  return true;
}

function isAlphaNumeric(char: string): boolean {
  // Helper function to check if a character is alphanumeric
  return char.match(/[a-z0-9]/i) !== null;
}
