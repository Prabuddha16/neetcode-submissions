class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDuplicates(nums) {
        return this.hashing(nums);
    }

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
}
