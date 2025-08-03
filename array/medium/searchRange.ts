const binarySearch = (
  numbs: number[],
  target: number,
  endIndex: boolean
): number => {
  let i = -1;
  let l = 0;
  let r = numbs.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    console.log(mid);
    if (numbs[mid] < target) l = mid + 1;
    else if (numbs[mid] > target) r = mid - 1;
    else {
      i = mid;
      if (endIndex) l = mid + 1;
      else r = mid - 1;
    }
  }
  return i;
};

function searchRange(nums: number[], target: number): number[] {
  const start = binarySearch(nums, target, false);
  const end = binarySearch(nums, target, true);

  return [start, end];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
