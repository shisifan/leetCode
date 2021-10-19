// 递归
var preorderTraversal = function(root) {
    const res = [];
    const pre = (root) => {
        if(root == null) {
            return null;
        }else{
            res.push(root.val);
            pre(root.left);
            pre(root.right);
        }
    }
    pre(root);
    return res;
};

// 迭代法
var preorderTraversal = function(root) {
    const res = [];
    const stack = [];
    if(root) {
        stack.push(root);
    }
    while(stack.length) {
        const n = stack.pop();
        res.push(n.val);
        if(n.right) {
            stack.push(n.right)
        }
        if(n.left) {
            stack.push(n.left);
        }
    }
    return res;
};