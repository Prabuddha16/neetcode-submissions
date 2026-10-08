class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // return this.brute(nums, k);
        return this.hashing(nums, k);
    }

    hashing(nums, k) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
                return true;
            }

            map.set(nums[i], i);
        }

        return false;
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
