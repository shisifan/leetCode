var largestValues = function(root) {
    let res = [];
    let queue = [];
    queue.push(root);
    if(root === null) {
        return res;
    }
    while(queue.length != 0) {
        let length = queue.length;
        let max = queue[0].val;
        while(length--) {
            let node = queue.shift();
            max = max > node.val ? max : node.val;
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
        res.push(max)
    }
    return res;
};