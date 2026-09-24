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
     * @return {ListNode}
     */
    middleNode(head) {
        return this.brute(head);
        // return this.twoPointer(head);
    }

    twoPointer(head) {
        if (!head) return null;

        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    brute(head) {
        let arr = [];
        let curr = head;
        while (curr) {
            arr.push(curr);
            curr = curr.next;
        }

        return arr[Math.floor(arr.length / 2)];
    }
}
