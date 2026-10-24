class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // return this.brute(strs);
        // return this.better(strs);
        return this.optimal(strs);
    }

    optimal(strs) {
        for (let i = 0; i < strs[0].length; i++) {
            for (let s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    return s.slice(0, i);
                }
            }
        }

        return strs[0];
    }

    better(strs) {
        if (strs.length === 0) return "";

        let prefix = strs[0];

        for (let i = 1; i < strs.length; i++) {
            while (!strs[i].startsWith(prefix)) {
                prefix = prefix.substring(0, prefix.length - 1);

                if (prefix === "") {
                    return "";
                }
            }
        }

        return prefix;
    }

    brute(strs) {
        if (!strs.length) return "";

        const firstStr = strs[0];

        for (let i = firstStr.length; i >= 1; i--) {
            const prefix = firstStr.substring(0, i);
            let isCommon = true;

            for (let j = 1; j < strs.length; j++) {
                if (!strs[j].startsWith(prefix)) {
                    isCommon = false;
                    break;
                }
            }

            if (isCommon) {
                return prefix;
            }
        }

        return "";
    }
}
