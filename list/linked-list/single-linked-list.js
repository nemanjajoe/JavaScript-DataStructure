var InitList = (() => {
    var Node = (() => {
        class Node {
            constructor(element) {
                this.element = element;
                this.next = null;
            }
        }
        return Node;
    })();

    class InitList {
        constructor(arr) {
            this.head = null;
            this.length = 0;
        }
        destroy() { //destroy the whole linked-list
            this.head = null;
        }
        isEmpty() { // check if the linked-list is empty
            if (this.length === 0) {
                return "empty";
            } else {
                return "not empty"
            }
        }
        length() {
            return this.length;
        }
        getElem(i) {
            if (i > 0 && i <= this.length) {
                let currentNode = this.head;
                for (let j = 1; j < i; j++) {
                    currentNode = currentNode.next;
                }
                return currentNode.element;
            } else {
                return null;
            }
        }
        locateElem(e, compare) {
            let currentNode = this.head,
                length = this.length,
                locate = 1,
                flag = true;
            if (compare === undefined) {
                for (let i = 0; i < length && flag; i++) {
                    if (currentNode.element === e) {
                        flag = false;
                        return locate;
                    } else {
                        currentNode = currentNode.next;
                        locate++;
                    }
                }
                return null;
            } else {
                for (let i = 0; i < length && flag; i++) {
                    if (compare(e, currentNode.element)) {
                        flag = false;
                        return locate;
                    } else {
                        currentNode = currentNode.next;
                        locate++;
                    }
                }
                return null;
            }
        }
        nextElem(e) {
            let currentNode = this.head,
                locate = this.locateElem(e) + 1;
            for (let i = 0; i < locate; i++) {
                currentNode = currentNode.next;
            }
            return currentNode.element;
        }
        priorElem(e) {
            let currentNode = this.head,
                locate = this.locateElem(e) - 1;
            for (let i = 0; i < locate; i++) {
                currentNode = currentNode.next;
            }
            return currentNode.element;
        }
        clear() {
            this.head = null;
        }
        insert(index, element) {
            let node = new Node(element),
                currentNode = this.head,
                previewsNode;
            if (index > 0 && index <= this.length) {
                for (let i = 0; i < index - 1; i++) {
                    currentNode = currentNode.next;
                }
                previewsNode = currentNode;
                previewsNode.next = node;
                node.next = currentNode.next;
            } else {
                return null;
            }
        }
        deleteElem(index) {
            let currentNode = this.head,
                previewsNode;
            if (index > 0 && index < this.length) {
                for (let i = 0; i < index - 1; i++) {
                    currentNode = currentNode.next;
                }
                previewsNode = currentNode;
                previewsNode.next = currentNode.next;
            }else {
                return null;
            }
        }
        traverse(visit) {
            let currentNode = this.head;
            for (let i = 0; i < this.length; i++) {
                currentNode.element = visit(currentNode.element);
                currentNode = currentNode.next;
            }
        }
    }
    return InitList;
})();