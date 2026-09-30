class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n = nums.length;
        // return this.brute(nums, n);
        return this.kadane(nums, n);
    }

    kadane(nums, n) {
        let currSum = nums[0];
        let maxSum = nums[0];

        for (let i = 1; i < n; i++) {
            currSum = Math.max(nums[i], currSum + nums[i]);
            maxSum = Math.max(maxSum, currSum);
        }

        return maxSum;
    }

    brute(nums, n) {
        let maxSum = nums[0];

        for (let i = 0; i < n; i++) {
            let currSum = 0;

            for (let j = i; j < n; j++) {
                currSum += nums[j];
                maxSum = Math.max(maxSum, currSum);
            }
        }

        return maxSum;
    }
}
