/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next) return head
    let slow = head, fast = head
    let pre = null
    while(fast && fast.next){
        pre = slow
        slow = slow.next
        fast = fast.next.next
    }
    pre.next = null
    const l = sortList(head)
    const r = sortList(slow)
    return merge(l,r)
};
    // 合并两个链表
    function merge(l1,l2){
        let dummy = new ListNode(0)
        let prev = dummy
        while(l1&&l2){
            if(l1.val < l2.val){
                prev.next = l1
                l1 = l1.next
            }else{
                prev.next = l2
                l2 = l2.next
            }
            prev = prev.next
        }
        if(l1) prev.next  = l1
        if(l2) prev.next = l2
        return dummy.next
    }