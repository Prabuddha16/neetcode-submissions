class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict);
        return this.optimal(s, wordDict, 0, wordSet);
    }

    /**
     * TC- O(2^n × n) with hash otherwise O(2^n × n x m)
     */
    brute(str, dict, i, wordSet) {
        // Base
        if (i === str.length) {
            return true;
        }

        // Check words
        for (let j = i + 1; j <= str.length; j++) {
            const word = str.substring(i, j);

            // if(dict.includes(word)){
            //     if(this.brute(str, dict, j)){
            //         return true;
            //     }
            // }

            if (wordSet.has(word)) {
                if (this.brute(str, dict, j, wordSet)) {
                    return true;
                }
            }
        }

        return false;
    }

    // O(n^2) / O(n)
    optimal(str, dict, i, wordSet) {
        const dp = new Array(str.length + 1).fill(false);
        dp[0] = true;

        for (let i = 1; i <= str.length; i++) {
            for (let j = 0; j < i; j++) {
                if (dp[j] && wordSet.has(str.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[str.length];
    }
}
