class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // Min coins required to make amount i
        const dp = new Array(amount + 1).fill(Infinity);

        // Base case for 0 amount
        dp[0] = 0;

        // Calculate ans for every amount from amount to target
        for (let currAmt = 1; currAmt <= amount; currAmt++) {
            // Try every coin
            for (const coin of coins) {
                // Use coin only currAmt less or equal to amount
                if (coin <= currAmt) {
                    dp[currAmt] = Math.min(dp[currAmt], 1 + dp[currAmt - coin]);
                }
            }
        }

        const res = dp[amount] === Infinity ? -1 : dp[amount];
        return res;
    }
}

// TC - O(amount*coins)
// SC - O(amount)
