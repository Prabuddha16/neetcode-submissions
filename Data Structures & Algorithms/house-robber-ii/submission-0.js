class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        return this.solve(nums, n);
    }

    houseRobOptimal(nums) {
        const n = nums.length;

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

    solve(nums, n) {
        // If only 1 house
        if (n === 1) return nums[0];

        // Case 1: Last house exclude, First include
        const option1 = this.houseRobOptimal(nums.slice(0, n - 1));

        // Case 2: First house exclude, Last include
        const option2 = this.houseRobOptimal(nums.slice(1));

        return Math.max(option1, option2);
    }
}
