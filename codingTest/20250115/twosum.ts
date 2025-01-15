//Example 1:
//
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//Example 2:
//
//Input: nums = [3,2,4], target = 6
//Output: [1,2]
//Example 3:
//
//Input: nums = [3,3], target = 6
//Output: [0,1]

function twoSum(nums: number[], target: number) {
  let answer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const m = target - nums[i];
    if (nums.includes(m) && i != nums.indexOf(m)) {
      console.log('s', i, nums.indexOf(m));
      answer.push(i);
      answer.push(nums.indexOf(m));
      return answer.sort((a, b) => a - b);
    }
  }
}

// 반복문과 includes(), indexOf() 들 때문에 시간복잡도가 O(n^2) 이라는 문제가 있음.

function twoSum2(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  throw new Error('No solution found');
}

// map을 사용해서 시간복잡도가 O(n)이 될 수 있음.
