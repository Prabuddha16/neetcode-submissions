class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const l = s.length;
        // return this.bruteSol(s, l);
        // return this.memoSol(s, l);
        return this.optimal(s,l);
    }

    optimal(s,l) {
        const solve = (i) => {
            if(s[i] === '0' || i === l) return 0;

            let oneDig = 1;
            let twoDig = 1;

            for(let i = 1; i < l; i++){
                let currSum = 0;

                // Case 1: 1 digit
                if(s[i] !== '0'){
                    currSum += oneDig;
                }

                // Case 2: 2 digit
                let twoDigit = s.substring(i-1, i+1);
                if(twoDigit >= 10 && twoDigit <= 26){
                    currSum += twoDig;
                }

                // But if 0
                if(currSum === 0) return 0;

                twoDig = oneDig;
                oneDig = currSum;
            }
            return oneDig;
        }

        return solve(0);
    }

    memoSol(s, l) {
        const memo = new Map();
        const solve = (i) => {
            // Full string decode return 1 - Valid way
            if (i === l) return 1;

            // Leading zero - Invalid way
            if (s[i] === "0") return 0;

            // Check memo
            if (memo.has(i)) return memo.get(i);

            // Case 1 - Pick 1 digit
            let ways = solve(i + 1);

            // Case 2 - Pick 2 digit
            if (i + 1 < l) {
                let twoDigit = s.substring(i, i + 2);
                if (twoDigit >= 10 && twoDigit <= 26) {
                    ways += solve(i + 2);
                }
            }

            memo.set(i, ways);
            return ways;
        };

        return solve(0);
    }

    bruteSol(s, l) {
        const solve = (i) => {
            // Full string decode return 1 - Valid way
            if (i === l) return 1;

            // Leading zero - Invalid way
            if (s[i] === "0") return 0;

            // Case 1 - Pick 1 digit
            let ways = solve(i + 1);

            // Case 2 - Pick 2 digit
            if (i + 1 < l) {
                let twoDigit = s.substring(i, i + 2);
                if (twoDigit >= 10 && twoDigit <= 26) {
                    ways += solve(i + 2);
                }
            }

            return ways;
        };

        return solve(0);
    }
}
