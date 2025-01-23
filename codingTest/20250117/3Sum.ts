function threeSum0(nums: number[]): number[][] {
  let answer: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    let currentList: number[] = [];
    let current = nums[i];
    currentList.push(current);
    for (let j = i + 1; j < nums.length; j++) {
      current += nums[j];
      currentList.push(nums[j]);
      for (let k = j + 1; k < nums.length; k++) {
        current += nums[k];
        currentList.push(nums[k]);

        if (current === 0) {
          answer.push(currentList);
        }
        currentList = [];
        current = 0;
      }
    }
  }

  return answer;
}

//console.log(threeSum([0, 1, 1]));
//console.log(threeSum([0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// 투포인터는 정렬된 배열에서 조건에 맞는 두수를 찾을때 효과적이다.
// 배열을 정렬하고 하나의 수를 고정시킨뒤 두 수를 찾는 해당 문제에 적합하다.
function threeSum(nums: number[]): number[][] {
  const answer: number[][] = [];

  // 1. 배열을 정렬
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 2. 중복된 첫 번째 값 건너뛰기
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // 3. 합이 0이면 결과에 추가
        answer.push([nums[i], nums[left], nums[right]]);

        // 4. 중복된 값 건너뛰기
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        // 5. 합이 0보다 작으면 왼쪽 포인터 증가
        left++;
      } else {
        // 6. 합이 0보다 크면 오른쪽 포인터 감소
        right--;
      }
    }
  }

  return answer;
}
