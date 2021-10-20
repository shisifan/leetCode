var levelOrder = function(root) {
    let res = [];
    let queue = [];
    queue.push(root);
    if(root === null) {
        return res;
    }
    while(queue.length != 0) {
        let length = queue.length;
        let curLevel = [];
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        res.push(curLevel);
    }
    return res;
};