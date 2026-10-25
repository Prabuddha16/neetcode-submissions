class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDuplicates(nums) {
        // return this.hashing(nums);
        // return this.optimal(nums);
        return this.sorting(nums);
    }

    // optimal(nums) {}

    hashing(nums) {
        const map = new Map();
        const result = [];

        for (let num of nums) {
            if (map.has(num)) {
                result.push(num);
            } else {
                map.set(num, 1);
            }
        }

        return result;
    }

    sorting(nums) {
        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                result.push(nums[i]);
            }
        }

        return result;
    }
}
