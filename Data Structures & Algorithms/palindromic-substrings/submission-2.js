class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
  let count = 0;
  const expand = (l, r) => {
    let localCount = 0;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      localCount++;
      l--;
      r++;
    }
    return localCount;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expand(i, i); // odd
    const len2 = expand(i, i + 1); // even
    count += len1 + len2;
  }

  return count;
    }
}
