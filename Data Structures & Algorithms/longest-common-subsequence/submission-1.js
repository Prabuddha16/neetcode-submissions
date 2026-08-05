class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        // const solve = (i, j) => {
        //     if (i === text1.length || j === text2.length) {
        //         return 0;
        //     }

        //     if (text1[i] === text2[j]) {
        //         return 1 + solve(i + 1, j + 1);
        //     }

        //     return Math.max(solve(i + 1, j), solve(i, j + 1));
        // };

        // return solve(0, 0);

        const n = text1.length;
        const m = text2.length;
        // Create 2D array
        const dp = Array.from({ length: text1.length }, () => Array(text2.length).fill(-1));

        const solve = (i, j) => {
            // Base Case
            if (i === n || j === m) {
                return 0;
            }

            // Already Calc
            if (dp[i][j] !== -1) {
                return dp[i][j];
            }

            // Char match
            if (text1[i] === text2[j]) {
                return (dp[i][j] = 1 + solve(i + 1, j + 1));
            }

            // Char not match
            return (dp[i][j] = Math.max(solve(i + 1, j), solve(i, j + 1)));
        };

        return solve(0,0);
    }
}
