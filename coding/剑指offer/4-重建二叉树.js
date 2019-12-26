// 牛客网：https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=13&tqId=11157&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0 || vin.length === 0) {
    return null;
  }
  let rootIndexInVin = vin.indexOf(pre[0]);
  let vinLeft = vin.slice(0, rootIndexInVin);
  let vinRight = vin.slice(rootIndexInVin + 1, vin.length);
  let preLeft = pre.slice(1, 1 + rootIndexInVin);
  let preRight = pre.slice(1 + rootIndexInVin, pre.length);
  let root = new TreeNode(pre[0]);
  root.left = reConstructBinaryTree(preLeft, vinLeft);
  root.right = reConstructBinaryTree(preRight, vinRight);
  return root;
}

tree = reConstructBinaryTree([1, 2, 3, 4, 5, 6, 7], [3, 2, 4, 1, 6, 5, 7]);
console.log(tree);