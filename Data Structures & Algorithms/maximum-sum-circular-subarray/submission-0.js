class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        return this.brute(nums);
    }

    brute(nums) {
        const n = nums.length;
        let maxSum = nums[0];

        for (let i = 0; i < n; i++) {
            let currSum = 0;

            for (let j = i; j < i + n; j++) {
                currSum += nums[j % n];
                maxSum = Math.max(maxSum, currSum);
            }
        }

        return maxSum;
    }
}
