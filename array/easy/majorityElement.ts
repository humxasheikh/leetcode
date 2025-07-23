function majorityElement(nums: number[]): number {
  const map = new Map<number, number>();
  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n)! + 1);
    } else {
      map.set(n, 1);
    }
    if (map.get(n)! > nums.length / 2) return n;
  }

  return 0;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
