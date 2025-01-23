export function countMin0(numbers: number[]): number {
  // TODO: Implement this function to count the smallest integer in the array.
  if (numbers.length === 0) {
    return 0;
  }

  let cnt = 0;

  const arr = numbers.sort((a, b) => a - b);
  let minNum = arr[0];
  console.log(arr);
  for (const a of arr) {
    if (a === minNum) {
      cnt += 1;
    }
  }
  return cnt; // Placeholder return
}

export function countMin(numbers: number[]): number {
  // TODO: Implement this function to count the smallest integer in the array.
  if (numbers.length === 0) {
    return 0;
  }

  let minNum = numbers[0];
  let cnt = 1;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === minNum) {
      cnt += 1;
    } else if (numbers[i] < minNum) {
      minNum = numbers[i];
      cnt = 1;
    }
  }
  return cnt; // Placeholder return
}

///console.log(1, countMin([1, 2, 3, 4, 5, 6]));
//console.log(2, countMin([-1, 1, 2, 3, 4]));
console.log(3, countMin([2, 3, 4, 2, 1, 1, 5]));
