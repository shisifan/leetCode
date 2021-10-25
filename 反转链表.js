// 迭代
let reverseList = function(head) {
    let pre = null;
    let cur = head;
    while(cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
