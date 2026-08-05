class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // return this.memo(nums);
        return this.tabulation(nums);
    }

    memo(nums) {
        // Create 1-D DP
        const dp = new Array(nums.length).fill(-1);

        const solve = (i) => {
            // Base case
            if (i >= nums.length) return 0;

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

    tabulation(nums) {
        const n = nums.length;

        if (n === 1) return nums[0];

        const dp = new Array(n + 2).fill(0);

        for (let i = n - 1; i >= 0; i--) {
            const loot = nums[i] + dp[i + 2];
            const skip = dp[i + 1];
            dp[i] = Math.max(loot, skip);
        }

        return dp[0];
    }
}
