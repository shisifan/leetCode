var kthLargest = function(root, k) {
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
    res.sort((a, b) => b - a);
    return res[k-1];
};