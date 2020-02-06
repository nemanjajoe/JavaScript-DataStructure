const Heap = (() => {
    return class Heap {
        constructor(tree) {
            this.heapContainer = new Array();
            this.tree = tree;
            if (!!this.tree) {
                let container = this.heapContainer;
                // the tree's method is all in the binaryTree.js; I can use it because i will them into one html file
                this.tree.levelOrderTraverse((node) => {
                    container.push(node.data);
                });
            } else {
                return false;
            }
        }
        heapifyDown(currentIndex = 0) {
            let i = currentIndex * 2 + 1,
                depth = this.tree.getDepth(),
                temp;
            while (i < depth) {
                if (this.heapContainer[i] < this.heapContainer[i + 1]) {
                    i++;
                }
                if (this.heapContainer[currentIndex] > this.heapContainer[i]) {
                    break;
                }
                // exchange the parent and the child
                temp = this.heapContainer[currentIndex];
                this.heapContainer[currentIndex] = this.heapContainer[i];
                this.heapContainer[i] = temp;
                //
                currentIndex = i;
                i = currentIndex * 2 + 1;
            }
        }
        heapifyUp(currentIndex = this.heapContainer.length - 1) {
            let i = Math.floor((currentIndex - 1) / 2),
                temp;
            while (currentIndex > 0 && this.heapContainer[i] < this.heapContainer[currentIndex]) {
                temp = this.heapContainer[currentIndex];
                this.heapContainer[currentIndex] = this.heapContainer[i];
                this.heapContainer[i] = temp;
                currentIndex = i;
                i = Math.floor((currentIndex - 1) / 2);
            }
        }
        add(element) {
            // this.tree.addNode(element);
            this.heapContainer[this.heapContainer.length] = element;
            this.heapifyUp();
        }
        remove() {
            this.heapContainer[0] = this.heapContainer[this.heapContainer.length - 1];
            this.heapContainer.pop();
            this.heapifyDown();
        }
        refreshTree() {
            this.tree.destroy();
            this.heapContainer.forEach((element) => {
                this.tree.addNode(element);
            });
            return this.tree;
        }
    }

})();