class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // return this.brute(nums, k);
        return this.bucketSort(nums, k);
    }

    bucketSort(nums, k) {
        // Step 1: Count frequency
        const frequency = new Map();
        for (const num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        // Step 2: Create buckets
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        // Step 3: Put numbers into bucket based on frequency
        for (const [num, count] of frequency) {
            buckets[count].push(num);
        }

        // Step 4: Traverse from highest frequency
        const result = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }

    brute(nums, k) {
        // Step-1: Count frequency
        const frequency = new Map();
        for (const num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        // Step-2: Convert map to array
        const entries = [...frequency.entries()];

        // Step-3: Sort by frequency descending
        entries.sort((a, b) => b[1] - a[1]);

        // Step-4: Return top k elements
        return entries.slice(0, k).map((entry) => entry[0]);
    }
}
