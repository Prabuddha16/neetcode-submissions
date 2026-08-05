class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
let count = 0;
  const isPalindrome = (str) => {
    let l = 0,
      r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.substring(i, j + 1);
      if (isPalindrome(sub)) {
        count+=1;
      }
    }
  }
  return count;
    }
}
