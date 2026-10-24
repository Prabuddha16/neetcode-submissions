class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        return this.brute(strs);
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
