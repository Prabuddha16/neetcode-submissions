class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
manacher = (s) => {
  // 1. Transform string
  const t = "#" + s.split("").join("#") + "#";
  const n = t.length;

  // 2. Create array to store the radius of palindrome at each center
  const p = new Array(n).fill(0);

  // 3. Maintain 2 pointers
  let l = 0,
    r = 0;

  // 4. Main loop to calculate p[i]
  for (let i = 0; i < n; i++) {
    p[i] = i < r ? Math.min(r - i, p[l + (r - i)]) : 0;

    // Expand around center i
    while (
      i + p[i] + 1 < n &&
      i - p[i] - 1 >= 0 &&
      t[i + p[i] + 1] === t[i - p[i] - 1]
    ) {
      p[i]++;
    }

    // Update boundaries
    if (i + p[i] > r) {
      l = i - p[i];
      r = i + p[i];
    }
  }
  return p;
};

    countSubstrings(s) {
          const p = this.manacher(s);
  let count = 0;

  // 5. Count palindromic substrings using p[i]
  for (let radius of p) {
    count += Math.floor((radius + 1) / 2);
  }
  return count;
    }
}
