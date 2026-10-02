class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        // return this.brute(nums);
        return this.kadane(nums);
    }

    kadane(nums) {
        let totalSum = nums[0];

        let currMax = nums[0];
        let maxSum = nums[0];

        let currMin = nums[0];
        let minSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            totalSum += nums[i];

            // Kadane for maximum subarray
            currMax = Math.max(nums[i], currMax + nums[i]);
            maxSum = Math.max(maxSum, currMax);

            // Kadane for minimum subarray
            currMin = Math.min(nums[i], currMin + nums[i]);
            minSum = Math.min(minSum, currMin);
        }

        // All elements are negative
        if (maxSum < 0) {
            return maxSum;
        }

        // Circular maximum
        let circularSum = totalSum - minSum;

        return Math.max(maxSum, circularSum);
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
