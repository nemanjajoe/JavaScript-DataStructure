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
        constructor() {
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
                return locate;
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
                return locate;
            }
        }
        nextElem(e) {
            let currentNode = this.head,
                locate = this.locateElem(e);
            for (let i = 0; i < locate; i++) {
                currentNode = currentNode.next;
            }
            return currentNode.element;
        }
        priorElem(e) {
            let currentNode = this.head,
                locate = this.locateElem(e);
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
                if (index === 1) {
                    this.head = node;
                    node.next = currentNode;
                    return this;
                }
                for (let i = 0; i < index - 1; i++) {
                    previewsNode = currentNode;
                    currentNode = currentNode.next;
                }
                previewsNode.next = node;
                node.next = currentNode;
                this.length++;
            } else {
                return null;
            }
        }
        deleteElem(index) {
            let currentNode = this.head,
                previewsNode;
            if (index > 0 && index <= this.length) {
                if (index === 1) {
                    this.head = currentNode.next;
                    this.length--;
                    return this;
                }
                for (let i = 0; i < index - 1; i++) {
                    previewsNode = currentNode;
                    currentNode = currentNode.next;
                }
                previewsNode.next = currentNode.next;
                this.length--;
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
        add(element) { // add element to this linked list
            let node = new Node(element),
                currentNode = this.head;
            if (this.head === null) {
                this.head = node;
                this.length++;
            }else{
                while(currentNode.next != null) {
                    currentNode = currentNode.next;
                }
                currentNode.next = node;
                this.length++;
            }
        }
    }
    return InitList;
})();

var test = new InitList();
test.add(2);
test.add("hi, lady!");
test.add(6);
test.deleteElem(2);
console.log(test);
test.add("this is haha");
test.insert(2,"look at me!");
console.log(test);
console.log(test.locateElem("this is haha"));
console.log(test.nextElem(2));
console.log(test.getElem(4));
