var rightSideView = function(root) {
    let res = [];
    let queue = [];
    queue.push(root);
    while(queue.length != null && root != null) {
        let length = queue.length;
        while(length--) {
            let node = queue.shift();
            if(length == 0) {
                res.push(node.val);
            }
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
    }
    return res;
}