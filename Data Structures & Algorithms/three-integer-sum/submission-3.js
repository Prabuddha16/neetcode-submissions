class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // return this.brute(nums);
        return this.optimal(nums);
    }

    optimal(nums) {
        const n = nums.length;
        const res = [];
        const set = new Set();

        nums.sort((a, b) => a - b);

        for (let i = 0; i < n; i++) {
            const numSet = new Set();

            for (let j = i + 1; j < n; j++) {
                const req = -(nums[i] + nums[j]);

                if (numSet.has(req)) {
                    const triplet = [nums[i], nums[j], req].sort((a, b) => a - b);
                    const key = triplet.join(",");

                    if (!set.has(key)) {
                        set.add(key);
                        res.push(triplet);
                    }
                }

                numSet.add(nums[j]);
            }
        }

        return res;
    }

    brute(nums) {
        const n = nums.length;
        const res = [];
        const set = new Set();

        nums.sort((a, b) => a - b);

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const triplet = [nums[i], nums[j], nums[k]];
                        const key = triplet.join(",");

                        if (!set.has(key)) {
                            set.add(key);
                            res.push(triplet);
                        }
                    }
                }
            }
        }

        return res;
    }
}
