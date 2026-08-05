class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // return this.brute(m, n);
        // return this.memoDP(m, n);
        // return this.optimal(m, n);
        return this.optimal1D(m, n);
    }

    optimal1D(m, n) {
        let row = new Array(n).fill(1);

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                row[j] = row[j] + row[j - 1];
            }
        }
        return row[n-1];
    }

    optimal(m, n) {
        // Create 2D paths
        const dp = Array.from({ length: m }, () => new Array(n).fill(1));

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1];
    }

    memoDP(m, n) {
        const memo = new Map();

        const solve = (i, j) => {
            // Invalid path
            if (i >= m || j >= n) return 0;

            // Valid path
            if (i === m - 1 && j === n - 1) return 1;

            // Check path
            const key = `${i},${j}`;
            if (memo.has(key)) return memo.get(key);

            // Case-1: Right
            let right = solve(i, j + 1);

            // Case-2: Down
            let down = solve(i + 1, j);

            // Total ways
            let ways = right + down;

            // Set ways
            memo.set(key, ways);

            return ways;
        };

        return solve(0, 0);
    }

    brute(m, n) {
        const solve = (i, j) => {
            // Invalid path
            if (i >= m || j >= n) return 0;

            // Valid path
            if (i === m - 1 && j === n - 1) return 1;

            // Case-1: Right
            let right = solve(i, j + 1);

            // Case-2: Down
            let down = solve(i + 1, j);

            return right + down;
        };

        return solve(0, 0);
    }
}
