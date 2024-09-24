
 class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let s = new ListNode(0,head)
    let rel = s
    while(rel.next){
        if(rel.next.val===val){
            rel.next = rel.next.next
            continue
        }
        rel = rel.next
    }
    console.log(s.next);  
    return s.next
};
removeElements(head = [1,2,6,3,4,5,6], val = 6)