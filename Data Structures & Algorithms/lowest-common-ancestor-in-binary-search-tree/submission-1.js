/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 * 
 * "I recursively search both subtrees; if one target is found on each side, the current node is their lowest common ancestor. If only one side returns a node, I propagate that node upward."
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // Step 1: No node
        if (!root) {
            return null;
        }

        // Step 2: Found p or q, early exit if one side has only root
        if (root === p || root === q) {
            return root;
        }

        // Step 3: Search left LCA
        let left = this.lowestCommonAncestor(root.left, p, q);

        // Step 4: Search right LCA
        let right = this.lowestCommonAncestor(root.right, p, q);

        // Step 5: If One node found on each side
        if (left && right) {
            return root;
        }

        // Step 6: Return whatever side found a node
        return left || right;
    }
}
