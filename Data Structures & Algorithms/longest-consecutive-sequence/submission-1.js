class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // return this.brute(nums);
        return this.better(nums);
    }

    better(nums) {
        // Base check & sorting
        if (!nums.length) return 0;
        nums.sort((a, b) => a - b);

        // Initilize
        let curr = nums[0];
        let streak = 0;
        let res = 0;
        let i = 0;

        // Iterate
        while (i < nums.length) {
            // Streak Reset
            if (curr !== nums[i]) {
                curr = nums[i];
                streak = 0;
            }

            // Duplicate Skip
            while (i < nums.length && curr === nums[i]) {
                i++;
            }

            // Streak Set
            streak++;
            curr += 1;
            res = Math.max(res, streak);
        }
        return res;
    }

    brute(nums) {
        // S1 - Intilize
        let res = 0;

        // S2 - Create Set
        const store = new Set(nums);

        // S3 - Iterate each elements of arr
        for (let num of nums) {
            // S4 - Initilize curr num & streak as count
            let streak = 0;
            let curr = num;

            // S5 - Check curr num in Set
            while (store.has(curr)) {
                streak++;
                curr += 1;
            }

            // S6 - Find max streak
            res = Math.max(res, streak);
        }
        return res;
    }
}
