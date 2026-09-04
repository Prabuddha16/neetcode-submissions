class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // return this.brute(nums);
        // return this.sorting(nums);
        // return this.hashing(nums);
        return this.votingAlgo(nums);
    }

    // BOYER MOORE VOTING ALGO
    votingAlgo(nums) {
        let candidate = null;
        let vote = 0;

        for (let num of nums) {
            if (vote === 0) {
                candidate = num;
            }

            if (num === candidate) {
                vote++;
            } else {
                vote--;
            }
        }

        return candidate;
    }

    hashing(nums) {
        const map = new Map();
        let res = 0;
        let maxCount = 0;

        for (let num of nums) {
            // Set or Get Count
            map.set(num, (map.get(num) || 0) + 1);

            if (map.get(num) > maxCount) {
                res = num;
                maxCount = map.get(num);
            }
        }

        return res;
    }

    sorting(nums) {
        nums.sort((a, b) => a - b);
        return nums[Math.floor(nums.length / 2)];
    }

    brute(nums) {
        let n = nums.length;

        for (let num of nums) {
            // JS Array Inbuilt Method
            let count = nums.reduce((acc, val) => acc + (val === num ? 1 : 0), 0);

            // Check Majority
            if (count > Math.floor(n / 2)) {
                return num;
            }
        }

        return -1;
    }
}
