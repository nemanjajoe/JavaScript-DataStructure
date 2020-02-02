const InitBinaryTree = (() => {
    var Node = (() => {
        return class Node {
            constructor(data) {
                this.data = data;
                this.left = null;
                this.right = null;
                this.parent = null;
            }
        }
    })();
    return class InitBinaryTree {
        constructor() {
            this.head = null;
        }
        destroy() {
            this.head = null;
        }
        clear() {
            let clear = (node) => {
                node.data = undefined;
            }
            this.preOrderTraverse(clear);
        }
        isEmpty() {
            if (this.head === null) {
                return "empty";
            } else {
                return "not empty";
            }
        }
        assign(value, index) {
            if (index === undefined) return false;
            let currentNode = this.getNode(index);
            if (currentNode) return currentNode.data = value;
            else return false;
        }
        getDepth(node = this.head) {
            if (node === null) {
                return 0;
            } else {
                let leftLength = this.getDepth(node.left),
                    rightLength = this.getDepth(node.right);
                return (leftLength > rightLength) ? leftLength + 1 : rightLength + 1;
            }
        }
        getRoot() {
            return this.head;
        }
        getNode(index) {
            if (index === undefined) return false;
            let visit = (node) => {
                if (index-- === 0)
                    return node;
            },
                node = this.levelOrderTraverse(visit);
            return node === undefined ? false : node;
        }
        getParent(index) {
            let currentNode = this.getNode(index);
            if (currentNode) return currentNode.parent;
            else return false;
        }
        getLeftChild(index) {
            let currentNode = this.getNode(index);
            if (currentNode) return currentNode.left;
            else return false;
        }
        getRightChild(index) {
            let currentNode = this.getNode(index);
            if (currentNode) return currentNode.right;
            else return false;
        }
        insertChild(index, newNode, LR) {
            if (newNode.right != null) return false;

            if (this.head === null){
                this.head = newNode;
            }else {
                let currentNode = this.getNode(index),
                    currentLeftChild = currentNode.left,
                    currentRightChild = currentNode.right;
                if (LR === 0) {
                    currentNode.left = newNode;
                    newNode.parent = currentNode;
                    newNode.right = currentLeftChild;
                    currentLeftChild.parent = newNode;
                }else if (LR === 1) {
                    currentNode.right = newNode;
                    newNode.parent = currentNode;
                    newNode.right = currentRightChild;
                    currentRightChild.parent = newNode;
                }else {
                    return false;
                }
            }
        }
        deleteChild(index, LR) {
            let currentNode = this.getNode(index);
            if (!!currentNode) {
                if (LR === 0) currentNode.left = null;
                else if (LR === 1) currentNode.right = null;
                return currentNode;
            }
            return false;
        }
        preOrderTraverse(visit, currentNode) {
            if (currentNode === undefined) {
                currentNode = this.head;
                this.preOrderTraverse(visit, currentNode);

            } else if (currentNode != null) {
                visit(currentNode);
                this.preOrderTraverse(visit, currentNode.left);
                this.preOrderTraverse(visit, currentNode.right);
            }
        }
        inOrderTraverse(visit, currentNode) {
            if (currentNode === undefined) {
                currentNode = this.head;
                this.inOrderTraverse(visit, currentNode);
            } else if (currentNode != null) {
                this.inOrderTraverse(visit, currentNode.left);
                visit(currentNode);
                this.inOrderTraverse(visit, currentNode.right);
            }
        }
        postOrderTraverse(visit, currentNode) {
            if (currentNode === undefined) {
                currentNode = this.head;
                this.postOrderTraverse(visit, currentNode);
            } else if (currentNode != null) {
                this.postOrderTraverse(currentNode.left);
                this.postOrderTraverse(currentNode.right);
                visit(currentNode);
            }
        }
        levelOrderTraverse(visit, currentNode) {
            if (this.head === null) return false;
            let queue = [currentNode === undefined ? this.head : currentNode];
            while (queue.length != 0) {
                currentNode = queue.shift();
                visit(currentNode);
                if (currentNode.left != null) {
                    queue.push(currentNode.left);
                    if (currentNode.right != null)
                        queue.push(currentNode.right);
                } else if (currentNode.right != null) {
                    queue.push(currentNode.right);
                }
            }
        }
    }
})();