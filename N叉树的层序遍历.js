var levelOrder = function(root) {
    let res = [];
    let queue = [];
    queue.push(root);
    while(queue.length && root != null) {
        let length = queue.length;
        let current = [];
        while(length--) {
            let node = queue.shift();
            current.push(node.val);
            for(let i of node.children) {
                if(i) {
                    queue.push(i);
                }
            }
        }
        res.push(current);
    }
    return res;
};