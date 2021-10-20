// 深度优先搜索
const dfs = (root, num) => {
    if(root == null) {
        return null;
    }
    const sum = num * 10 + root.val;
    if(root.left == null && root.right == null) {
        return sum;
    }else{
        return dfs(root.left, sum) + dfs(root.right, sum)
    }
}
var sumNumbers = function(root) {
    return dfs(root, 0);
};

// 广度优先搜索
let sumNumbers = function(root) {
    if(root === null) {
        return null;
    }
    let sum = 0;
    const nodeQueue = [];
    const numQueue = [];
    nodeQueue.push(root);
    numQueue.push(root.val);
    while(nodeQueue.length) {
        const node = nodeQueue.shift();
        const num = numQueue.shift();
        const left = node.left,
              right = node.right;
        if(left === null && right === null) {
            sum += num;
        } else {
            if(left !== null) {
                nodeQueue.push(left);
                numQueue.push(num * 10 + left.val);
            }
            if(right !== null) {
                nodeQueue.push(right);
                numQueue.push(num * 10 + right.val);
            }
        }
    }
    return sum;
}