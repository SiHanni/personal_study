export function secondMax(nums: number[]): number | null {
  // TODO: Find the second largest number in nums
  if (nums.length < 2) {
    return null;
  }

  let firstNum: number | null = null;
  let secondNum: number | null = null;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (firstNum === null || current > firstNum) {
      secondNum = firstNum;
      firstNum = current;
    } else if (
      current !== firstNum &&
      (secondNum === null || current > secondNum)
    ) {
      secondNum = current;
    }
  }
  return secondNum;
}
