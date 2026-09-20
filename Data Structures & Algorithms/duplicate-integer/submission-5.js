class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return this.sorting(nums);
        // return this.hashing(nums);
    }

    sorting(nums) {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                return true;
            }
        }
        return false;
    }

    hashing(nums) {
        const set = new Set();
        for (const num of nums) {
            if (set.has(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }
}
