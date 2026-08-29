class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        return this.brute(nums, k);
    }

    brute(nums, k) {
        const frequency = new Map();

        // Count frequency
        for (const num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        // Convert map to array
        const entries = [...frequency.entries()];

        // Sort by frequency descending
        entries.sort((a, b) => b[1] - a[1]);

        // Return top k elements
        return entries.slice(0, k).map((entry) => entry[0]);
    }
}
