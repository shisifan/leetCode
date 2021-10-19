var inorderTraversal = function(root) {
    const res = [];
    const order = (root) =>{
        if(root == null) {
            return 0;
        }else{
            order(root.left);
            res.push(root.val);
            order(root.right);
        }
    }
    order(root);
    return res;
};

// 迭代法
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    while(root || stack.length) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};
console.log(inorderTraversal([1,null,2,3]));  // [1, 3, 2]