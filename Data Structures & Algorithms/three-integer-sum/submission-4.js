class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // return this.brute(nums);
        // return this.optimalHash(nums);
        return this.optimal2P(nums);
    }

    optimal2P(nums) {
        nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break; // Because sorted array mein agar current nums[i] > 0 hai, aage ke saare numbers bhi +ve honge.

            // Skip duplicate first numbers
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);

                    // Skip duplicate left values
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }

                    // Skip duplicate right values
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }

    optimalHash(nums) {
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
