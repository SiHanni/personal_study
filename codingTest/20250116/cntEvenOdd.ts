export function countEvenOdd(nums: number[]): {
  evenCount: number;
  oddCount: number;
} {
  // TODO: implement the function to return an object { evenCount: x, oddCount: y }
  let evenCnt = 0;
  let oddCnt = 0;
  for (const num of nums) {
    if (num % 2 === 0) {
      evenCnt += 1;
    } else {
      oddCnt += 1;
    }
  }

  return { evenCount: evenCnt, oddCount: oddCnt }; // Placeholder return
}

console.log(countEvenOdd([1, 2, 3, 4, 5]));
