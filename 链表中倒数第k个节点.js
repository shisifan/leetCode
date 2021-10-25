// 顺序查找
var getKthFromEnd = function(head, k) {
    let node = head;
    n = 0;
    while(node) {
        node = nod.next;
        n++;
    }
    node = head;
    for(let i = 0; i < n - k; i++){
        node = node.next;
    }
    return node;
};

// 快慢指针
var getKthFromEnd = function(head, k) {
    let fast = head;
    let slow = head;
    while(fast && k > 0) {
        [fast, k] = [fast.next, k - 1];
    }
    while(fast) {
        [fast, slow] = [fast.next, slow.next];
    }
    return slow;
};