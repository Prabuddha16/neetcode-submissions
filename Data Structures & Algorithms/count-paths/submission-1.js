class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // return this.brute(m, n);
        return this.memoDP(m, n);
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
