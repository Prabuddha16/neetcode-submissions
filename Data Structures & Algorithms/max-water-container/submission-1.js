class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // return this.brute(heights);
        return this.optimal2P(heights);
    }

    optimal2P(heights) {
        let n = heights.length;
        let res = 0;

        let l = 0;
        let r = n - 1;

        while (l < r) {
            const minDiff = r - l;
            const minHeights = Math.min(heights[l], heights[r]);
            const area = minHeights * minDiff;

            res = Math.max(res, area);

            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return res;
    }

    brute(heights) {
        let n = heights.length;
        let res = 0;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const minHeightDiff = j - i;
                const minHeight = Math.min(heights[i], heights[j]);
                res = Math.max(res, minHeight * minHeightDiff);
            }
        }

        return res;
    }
}
