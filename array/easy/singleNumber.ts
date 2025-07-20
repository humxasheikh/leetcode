function singleNumber(nums: number[]): number {
  const map = new Map<number, number>();

  for (const n of nums) {
    if (map.has(n)) map.set(n, map.get(n)! + 1);
    else map.set(n, 1);
  }

  for (const [key, val] of map) {
    if (val === 1) return key;
  }

  return 0;
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
