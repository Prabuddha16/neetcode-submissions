/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        // Base case
        if (!root) return true;

        // Height of Left SubTree & Right SubTree
        let left = this.height(root.left);
        let right = this.height(root.right);

        // Difference b/w both SubTrees
        let heightDiff = Math.abs(left - right);

        if (heightDiff > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    // Height of Tree
    height(root) {
        if (!root) return 0;
        return 1 + Math.max(this.height(root.left), this.height(root.right));
    }
}
