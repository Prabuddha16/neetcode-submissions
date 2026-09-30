class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n = nums.length;
        // return this.brute(nums, n);
        return this.maxSubArray(nums, n);
    }

    maxSubArray(nums, n) {
        let maxSum = nums[0];
        let currSum = 0;

        for (let num of nums) {
            if (currSum < 0) {
                currSum = 0;
            }

            currSum += num;
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
