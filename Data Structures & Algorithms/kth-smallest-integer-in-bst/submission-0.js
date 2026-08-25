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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        this.count = 0;
        this.res = null;

        this.inorderTraversal(root, k);

        return this.res;
    }

    // Inorder = Left -> Root -> Right
    inorderTraversal(root, k) {
        // Step 1: Base case
        if (!root) {
            return;
        }

        // Step 2: Go Left
        this.inorderTraversal(root.left, k);

        // Step 3: Process Current Node
        this.count++;

        if (this.count === k) {
            this.res = root.val;
            return;
        }

        // Step 4: Go Right
        this.inorderTraversal(root.right, k);
    }
}
