class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        return this.brute(nums, k);
    }

    brute(nums, k) {
        const n = nums.length;

        // k is greater than n
        k %= n;

        // Rotate k times
        for (let i = 0; i < k; i++) {
            // Pick last element
            let last = nums[n - 1];

            // Iterate from last
            for (let j = n - 1; j > 0; j--) {
                nums[j] = nums[j - 1];
            }

            // Assign last to first
            nums[0] = last;
        }
    }
}
