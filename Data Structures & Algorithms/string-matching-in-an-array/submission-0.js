class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        return this.brute(words);
    }

    brute(words) {
        let res = [];

        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words.length; j++) {
                // Skip comparing a word with itself
                if (i === j) {
                    continue;
                }

                // Check if the current word exists as a substring of another word
                if (words[j].includes(words[i])) {
                    res.push(words[i]);
                    // Stop searching once a match is found to avoid duplicate entries
                    break;
                }
            }
        }

        return res;
    }
}
