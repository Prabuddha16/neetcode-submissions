class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
         if (!s) return "";

  // Step 1: Transform string
  const T = "^#" + s.split("").join("#") + "#$";
  const n = T.length;
  const P = Array(n).fill(0);

  let center = 0,
    right = 0;

  // Step 2: Main loop
  for (let i = 1; i < n - 1; i++) {
    let mirror = 2 * center - i;

    if (i < right) {
      P[i] = Math.min(right - i, P[mirror]);
    }

    // Expand
    while (T[i + P[i] + 1] === T[i - P[i] - 1]) {
      P[i]++;
    }

    // Update center & right
    if (i + P[i] > right) {
      center = i;
      right = i + P[i];
    }
  }

  // Step 3: Find max
  let maxLen = 0;
  let centerIndex = 0;

  for (let i = 1; i < n - 1; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i];
      centerIndex = i;
    }
  }

  const start = Math.floor((centerIndex - maxLen) / 2);
  return s.substring(start, start + maxLen);
    }
}
