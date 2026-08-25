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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // If root is null, subtree cannot exist
        if (!root) {
            return false;
        }

        // If current node matches subRoot,
        // check whether the complete trees are same
        if (root.val === subRoot.val && this.isSameTree(root, subRoot)) {
            return true;
        }

        // Search in left and right subtree
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }

        if (p && q && p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
        }

        return false;
    }
}
