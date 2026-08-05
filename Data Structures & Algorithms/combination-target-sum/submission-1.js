class Solution {
    /**
     * @description- Finds all unique combinations whose sum equals the target.
     *              Each number can be used unlimited times.
     * @time- O(2^T)
     *       T = Target value (worst-case exponential recursion tree)
     * @space- O(T / min(nums))
     *        - Recursion stack + current combination
     *        - Output array is not included.
     */
    combinationSum(nums, target) {
        // Stores all valid combinations
        const ans = [];

        // Stores current combination
        const cur = [];

        // // Start Backtracking
        // this.backtrackingBF(nums, target, ans, cur, 0);

        // return ans;

        const total = 0;
        
        const curIdx = 0;

        nums.sort((a, b) => a - b);

        this.backtrackingOptimal(nums, target, ans, cur, curIdx, total);

        return ans;
    }

    /**
     * @approach- Backtracking (For Loop)
     * @time- O(n log n + 2^T)
     *       - O(n log n) for sorting
     *       - Exponential for backtracking
     * @space- O(T / min(nums))
     *       - Recursion stack + current combination
     *       - Output array not included.
     */
    backtrackingOptimal(nums, target, ans, cur, index, total) {
        // Valid combination found
        if (total === target) {
            ans.push([...cur]);
            return;
        }

        for (let i = index; i < nums.length; i++) {
            // Pruning because array is sorted
            if (total + nums[i] > target) {
                return;
            }

            // Choose current number
            cur.push(nums[i]);

            // Same index because reuse is allowed
            this.backtrackingOptimal(nums, target, ans, cur, i, total + nums[i]);

            // Undo choice
            cur.pop();
        }
    }

    /**
     * @approach- Backtracking (Pick / Skip)
     * @time- O(2^T)
     *       T = Target value (worst-case exponential recursion tree)
     * @space- O(T / min(nums))
     *        - Recursion stack + current combination
     *        - Output array is not included.
     */
    backtrackingBF(nums, target, ans, cur, index) {
        // Target achieved
        if (target === 0) {
            ans.push([...cur]);
            return;
        }

        // Invalid path
        if (target < 0 || index >= nums.length) {
            return;
        }

        // -------------------------
        // Choice 1 : Pick current number
        // -------------------------
        cur.push(nums[index]);

        // Stay on same index because
        // current number can be reused.
        this.backtrackingBF(nums, target - nums[index], ans, cur, index);

        // Undo choice
        cur.pop();

        // -------------------------
        // Choice 2 : Skip current number
        // -------------------------
        this.backtrackingBF(nums, target, ans, cur, index + 1);
    }
}
