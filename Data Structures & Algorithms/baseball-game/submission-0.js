class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let res = 0;
        for (let op of operations) {
            if (op === "+") {
                const top = stack.pop();
                const newTop = top + stack[stack.length - 1];
                stack.push(top);
                stack.push(newTop);
                res += newTop;
            } else if (op === "D") {
                stack.push(2 * stack[stack.length - 1]);
                res += stack[stack.length - 1];
            } else if (op === "C") {
                res -= stack.pop();
            } else {
                stack.push(+op);
                res += stack[stack.length - 1];
            }
        }
        return res;
    }
}
