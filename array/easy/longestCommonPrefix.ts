// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs: string[]): string => {
  let result = '';
  // if array's length is 0 retrun
  if (!strs || strs.length === 0) return result;
  if (strs.length === 1) return strs[0];
  // take the first value of the array
  const firstValue = strs[0];
  // iterate on the the string's characters
  for (let i = 0; i < firstValue.length; i++) {
    // iterate on the list from 1st index and keep checking the the each character util we finish with array
    for (let j = 1; j < strs.length; j++) {
      // check if the length of the current array value is less then the length value of firstvalue, retrun result
      if (i > strs[j].length - 1) return result;
      // if charachter does not match, we need to return
      if (firstValue[i] !== strs[j][i]) return result;
      // if character matches we need to append it to the result
      if (j === strs.length - 1) result = `${result}${firstValue[i]}`;
    }
  }

  return result;
};

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
