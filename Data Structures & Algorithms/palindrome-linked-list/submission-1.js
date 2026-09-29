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
     * @return {boolean}
     */
    isPalindrome(head) {
        return this.twoPointers(head);
        // return this.brute(head);
    }

    twoPointers(head) {
        let fast = head;
        let slow = head;

        // Find Middle
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // Reverse 2nd Half
        let prev = null;
        while (slow) {
            let temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }

        // Check Palindrome
        let left = head;
        let right = prev;

        while (right) {
            if (left.val !== right.val) return false;

            left = left.next;
            right = right.next;
        }

        return true;
    }

    brute(head) {
        const arr = [];
        let curr = head;

        // Traverse LL to create Array
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }

        // Two Pointer in an Array
        let l = 0;
        let r = arr.length - 1;

        // Traverse Array
        while (l < r) {
            if (arr[l] !== arr[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
