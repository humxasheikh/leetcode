const removeElement = (nums: number[], val: number): number => {
  // need to move the the numbers which are equal to the val at las position in the string and return count of unique numbers
  // check if array is empty of null, return 0
  if (!nums || nums.length === 0) return 0;
  // check if array contains val, if not retrun the length of the array
  if (!nums.includes(val)) return nums.length;
  // store the last index of the array, to switch the values
  let lastIndex = nums.length - 1;
  let numberOfSwaps = 0;
  // here is the catch last index can also be the same as the value is need to iterate on the last index as well to find the exact place
  const findLastIndex = (i: number) => {
    let index = i;
    while (nums[index] === val && index > 0) {
      index--;
    }
    return index;
  };
  // iterate on the list
  for (let i = 0; i < nums.length; i++) {
    //
    // check if the current value is same as the val, swap it with the last index and subtract the last index value.
    if (nums[i] === val && i < lastIndex) {
      lastIndex = findLastIndex(lastIndex);
      console.log(
        'lastIndex',
        lastIndex,
        'current',
        nums[i],
        'last',
        nums[lastIndex]
      );
      nums[i] = nums[lastIndex];
      nums[lastIndex] = val;
      numberOfSwaps = i;
    }
    // increment the result by one
  }
  console.log(nums);
  return numberOfSwaps;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
