const InitBST = (() => {
    class Node {
        constructor(item) {
            this.item = item;
            this.left = null;
            this.right = null;
        }
        view(node) {
            if (node != null) {
                this.view(node.left);
                console.log(node.item);
                this.view(node.right);
            }
        }
    }
    return class InitBST {
        constructor() {
            this.head = null;
        }
        searchFrom(item, currentNode) {
            if (currentNode === undefined) currentNode = this.head;
            if (item === currentNode.item || currentNode === null) {
                return currentNode;
            } else if (item < currentNode.item) {
                currentNode = currentNode.left;
                this.search(item, currentNode);
            } else if (item > currentNode.item) {
                currentNode = currentNode.right;
                this.search(item, currentNode);
            }
        }
        add(item, currentNode) {
            let newNode = new Node(item);
            if (this.head === null) this.head = newNode;
            if (currentNode === undefined) currentNode = this.head;

            if (currentNode === null) {
                currentNode = newNode;
            }else if (item < currentNode.item) {
                this.add(item, currentNode.left);
            }else if(item > currentNode.item) {
                this.add(item, currentNode.right);
            }
        }
        view() {
            let currentNode = this.head;
            if (currentNode != null) {
                currentNode.view(currentNode);
            }
        }
    }
})();

let test = new InitBST();

test.add(3);