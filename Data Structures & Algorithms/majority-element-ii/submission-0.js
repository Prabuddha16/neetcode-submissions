class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        return this.brute(nums);
    }

    brute(nums) {
        const res = new Set();

        for (const num of nums) {
            let count = 0;

            for (const i of nums) {
                if (i === num) count++;
            }

            if (count > Math.floor(nums.length / 3)) {
                res.add(num);
            }
        }

        return Array.from(res);
    }
}
