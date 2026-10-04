class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        return this.brute(nums, k);
    }

    brute(nums, k) {
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j <= Math.min(i + k, n - 1); j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }

        return false;
    }
}
