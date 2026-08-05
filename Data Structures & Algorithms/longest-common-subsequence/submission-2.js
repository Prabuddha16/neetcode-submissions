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

        // const n = text1.length;
        // const m = text2.length;
        // // Create 2D array
        // const dp = Array.from({ length: text1.length }, () => Array(text2.length).fill(-1));

        // const solve = (i, j) => {
        //     // Base Case
        //     if (i === n || j === m) {
        //         return 0;
        //     }

        //     // Already Calc
        //     if (dp[i][j] !== -1) {
        //         return dp[i][j];
        //     }

        //     // Char match
        //     if (text1[i] === text2[j]) {
        //         return (dp[i][j] = 1 + solve(i + 1, j + 1));
        //     }

        //     // Char not match
        //     return (dp[i][j] = Math.max(solve(i + 1, j), solve(i, j + 1)));
        // };

        // return solve(0,0);

        // Find min length string
        if (text1.length < text2.length) {
            [text1, text2] = [text2, text1];
        }

        // Find prev & curr text
        let prev = new Array(text2.length + 1).fill(0);
        let curr = new Array(text2.length + 1).fill(0);

        for (let i = text1.length - 1; i >= 0; i--) {
            for (let j = text2.length - 1; j >= 0; j--) {
                if (text1[i] === text2[j]) {
                    curr[j] = 1 + prev[j + 1];
                } else {
                    curr[j] = Math.max(curr[j + 1], prev[j]);
                }
            }
            [prev, curr] = [curr, prev];
        }

        return prev[0];
    }
}
