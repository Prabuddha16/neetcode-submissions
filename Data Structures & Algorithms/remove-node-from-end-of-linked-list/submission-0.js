/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;
        let count = 0;

        // Count length
        while (curr) {
            count++;
            curr = curr.next;
        }

        const idx = count - n;

        // Remove head
        if (idx === 0) {
            return head.next;
        }

        // Reset curr
        curr = head;

        // Find node before target
        for (let i = 0; i < idx - 1; i++) {
            curr = curr.next;
        }

        // Remove target
        curr.next = curr.next.next;

        return head;
    }
}
