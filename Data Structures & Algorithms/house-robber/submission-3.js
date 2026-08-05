class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        // return this.memo(nums, n);
        // return this.table(nums, n);
        return this.optimal(nums, n);
    }

    memo(nums, n) {
        // Create 1-D DP
        const dp = new Array(n).fill(-1);

        const solve = (i) => {
            // Base case
            if (i >= n) return 0;

            // Check ans exists or not
            if (dp[i] !== -1) return dp[i];

            // Main Case
            const loot = nums[i] + solve(i + 2);
            const skip = solve(i + 1);

            // Max Money
            dp[i] = Math.max(loot, skip);

            return dp[i];
        };

        return solve(0);
    }

    table(nums, n) {
        if (n === 1) return nums[0];

        const dp = new Array(n + 2).fill(0);

        for (let i = n - 1; i >= 0; i--) {
            const loot = nums[i] + dp[i + 2];
            const skip = dp[i + 1];
            dp[i] = Math.max(loot, skip);
        }

        return dp[0];
    }

    optimal(nums, n) {
        let next1 = 0; // dp[i+1]
        let next2 = 0; // dp[i+2]

        for (let i = n - 1; i >= 0; i--) {
            const loot = nums[i] + next2;
            const skip = next1;
            const curr = Math.max(loot, skip);

            next2 = next1;
            next1 = curr;
        }

        return next1;
    }
}
