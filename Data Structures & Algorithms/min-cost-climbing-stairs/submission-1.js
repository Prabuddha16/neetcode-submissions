class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // return this.recursion(cost);
        return this.dp(cost);
    }

    dp(cost) {
        const n = cost.length;

        const dp = new Array(n);

        dp[0] = cost[0];
        dp[1] = cost[1];

        for (let i = 2; i < n; i++) {
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        }

        return Math.min(dp[n - 1], dp[n - 2]);
    }

    recursion(cost) {
        const dfs = (i) => {
            if (i >= cost.length) {
                return 0;
            }

            return cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
        };

        return Math.min(dfs(0), dfs(1));
    }
}
