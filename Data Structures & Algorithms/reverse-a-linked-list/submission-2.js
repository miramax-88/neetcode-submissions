/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
//0->1->2->3
// null<-0<-1
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let tail = null;
        let current = head;

        while (current !== null) {
            let next = current.next;
            current.next = tail;
            tail = current;
            current = next;
        }

        return tail;
    }
}
