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
     * @return {number[]}
     */
    inorderTraversal(root) {
        const result = [];
        const stack = [];
        let curr = root;

        while(curr || stack.length > 0) {
            while(curr) {
                stack.push(curr);
                curr = curr.left;
            }
            let curr2 = stack.pop();
            result.push(curr2.val);
            curr = curr2.right;
        }

        return result;
    }
}
