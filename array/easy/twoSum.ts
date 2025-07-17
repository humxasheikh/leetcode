// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums: number[], target: number): number[] => {
  const result: number[] = [];
  nums.map((number, index) => {
    // find difference
    const difference = target - number;

    // check if difference exist in array
    // if exist, find the index of that difference and return current index and the difference index
    if (nums.includes(difference) && result.length === 0) {
      result.push(index, nums.indexOf(difference));
    }
    // else contiue
  });
  return result;
};

const solutionWithReduce = (nums: number[], target: number): number[] => {
  // create map that containd the differenct and index of the array where we have this difference
  const map = new Map<number, number>();

  // use reduce iterator
  // check if number exit in map
  // if it exist to retrun it
  // if not, set the value and index and retrun null
  // magical touch, you need to return result if result is not null for all iterations xd
  const result = nums.reduce<number[] | null>((result, currentvalue, index) => {
    if (result) return result;
    if (map.has(currentvalue)) {
      return [map.get(currentvalue)!, index];
    }
    const difference = target - currentvalue;
    map.set(difference, index);
    return null;
  }, null);

  return result ?? [];
};

const optimalSolutionOne = (nums: number[], target: number): number[] => {
  // create a hash the map will keep the difference  as a key and for which index we have this difference will be the value
  const map = new Map<number, number>(); // [{16,0},{11, 1}]
  // iterate on the map
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const difference = target - num;
    console.log(`does exits: ${map.has(difference)}, ${difference}`);
    // check if the current number exist in hash.
    if (map.has(num)) {
      // if yes, return that hash value and current index
      return [map.get(num)!, index];
    }
    // else add difference and index to the hash
    console.log(difference, index);
    map.set(difference, index);
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 18));
console.log(optimalSolutionOne([2, 7, 11, 15], 18));
console.log(solutionWithReduce([2, 7, 11, 15], 18));
