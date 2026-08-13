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
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return;

        // 1. Find middle
        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Reverse 2nd half
        let prev = null;
        let curr = slow.next; // middle head
        slow.next = null;

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // 3. Merge two halves
        let first = head;
        let second = prev;

        while(second){
            let fn = first.next;
            let sn = second.next;

            first.next = second;
            second.next = fn;

            first = fn;
            second = sn;
        }
    }

}
