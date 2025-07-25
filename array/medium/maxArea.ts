function maxArea(height: number[]): number {
  if (!height || height.length < 2) return 0;

  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;
  let width = height.length - 1;

  while (start < end) {
    // need to find the comman area? I can find it my taking the min of both
    // how we can find the area? sqr of the common area
    console.log(Math.min(height[start], height[end]), width);
    const area = Math.min(height[start], height[end]) * width;

    // How we can find the max area? max of maxArea and area
    maxArea = Math.max(maxArea, area);
    // How we can move the index? if val[s]>val[e], dec e--
    if (height[start] > height[end]) end--;
    // esle s++
    else start++;
    width--;
  }
  console.log(maxArea);
  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
