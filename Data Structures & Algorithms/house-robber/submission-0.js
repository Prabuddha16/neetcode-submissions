class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
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
}
