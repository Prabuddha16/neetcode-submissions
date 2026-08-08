class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        return this.brute(s);
    }

    brute(s) {
        while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
            s = s.replace("()", "");
            s = s.replace("{}", "");
            s = s.replace("[]", "");
        }

        return s === "";
    }
}
