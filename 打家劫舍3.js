var rob = function (root) {
    const f = new Map();
    const g = new Map();
    const dfs = (node) => {
        if(node == null) {
            return;
        }
        dfs(node.left);
        dfs(node.right);
        f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
        g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0));
    }
    dfs(root);
    return Math.max(f.get(root) || 0, g.get(root) || 0)
}
console.log(rob([3,2,3,null,3,null,1]));