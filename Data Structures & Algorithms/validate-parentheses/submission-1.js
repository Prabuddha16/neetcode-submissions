class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // return this.brute(s);
        return this.optimal(s);
    }

    optimal(s) {
        const stack = [];

        for (let ch of s) {
            // Opening Bracket
            if (ch === "(" || ch === "{" || ch === "[") {
                stack.push(ch);
            }

            // Closing Bracket
            else {
                if (stack.length === 0) {
                    return false;
                }

                const top = stack.pop();

                if (
                    (ch === ")" && top !== "(") ||
                    (ch === "}" && top !== "{") ||
                    (ch === "]" && top !== "[")
                ) {
                    return false;
                }
            }
        }

        return stack.length === 0;
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
