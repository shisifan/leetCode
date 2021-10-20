var averageOfLevels = function(root) {
    const res = [];
    const queue = [];
    queue.push(root);
    if(root == null) {
        return res;
    }
    while(queue.length != 0) {
        const length =  queue.length;
        let sum = 0;
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            sum += node.val;
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        res.push(sum / length);
    }
    return res;
};