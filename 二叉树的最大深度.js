var maxDepth = function(root) {
    if(root != null) {
       const left = maxDepth(root.left);
       const right = maxDepth(root.right);
       return Math.max(left, right) + 1;
    } else {
        return null;
    }
};
console.log(maxDepth([3,9,20,null,null,15,7]));