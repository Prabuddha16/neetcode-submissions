class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        // return this.brute(nums);
        return this.optimal(nums);
    }

    optimal(nums) {
        let maxReach = 0;

        for (let i = 0; i < nums.length; i++) {
            if (i > maxReach) return false; // current index is unreachable
            maxReach = Math.max(maxReach, i + nums[i]);
            if (maxReach >= nums.length - 1) return true; // early exit
        }
        return true;
    }

    brute(nums) {
        const solve = (pos) => {
            if (pos >= nums.length - 1) return true;

            const maxJump = nums[pos];
            for (let step = 1; step <= maxJump; step++) {
                if (solve(pos + step)) return true;
            }

            return false;
        };

        return solve(0);
    }
}
