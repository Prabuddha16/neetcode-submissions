class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const count = new Array(26).fill(0);

        // s ke characters ka count increase
        for (const ch of s) {
            count[ch.charCodeAt(0) - 97]++;
        }

        // t ke characters ka count decrease
        for (const ch of t) {
            count[ch.charCodeAt(0) - 97]--;
        }

        // Sab 0 hone chahiye
        for (const num of count) {
            if (num !== 0) {
                return false;
            }
        }

        return true;
    }
}
