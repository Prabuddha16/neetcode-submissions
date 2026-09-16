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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        return this.brute(root);
    }

    brute(root) {
        if (!root) return 0;

        // Get Height of Tree
        const lHeight = this.height(root.left);
        const rHeight = this.height(root.right);

        // get Diameter of Tree
        const lDiameter = this.brute(root.left);
        const rDiameter = this.brute(root.right);

        return Math.max(lHeight + rHeight, lDiameter, rDiameter);
    }

    height(root) {
        if (!root) return 0;

        return 1 + Math.max(this.height(root.left), this.height(root.right));
    }
}
