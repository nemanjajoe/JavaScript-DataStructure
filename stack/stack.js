const InitStack = (() => { // this is the linked stack. actually, stack is a specified list;
    var Node = (() => {
        class Node {
            constructor(element) {
                this.element = element;
                this.next = null;
            }
        }
        return Node;
    })();
    class InitStack {
        constructor () {
            this.top = null;
            this.length = 0;
        }
        stack = null;
        destroy() {
            this.top = null;
            this.stack = null;
            return this;
        }
        isEmpty() {
            if (this.length === 0) {
                return "empty";
            }else {
                return "not empty";
            }
        }
        getLength() {
            return this.length;
        }
        getTop() {
            return this.top;
        }
        push(element) {
            if (this.stack === null) {
                this.stack = new Node(element);
                this.top = this.stack;
            }else {
                this.top.next = new Node(element);
                this.top = this.top.next;
            }
            this.length++;
        }
        pop() {
            if (this.length === 0) {
                return false;
            }else {
                let currentNode = this.stack;
                for (let i = 0; i < this.length - 2; i++) {
                    currentNode = currentNode.next;
                }
                this.top = currentNode;
                currentNode.next = null;
            }
            this.length--;
        }
        clear() {
            this.top = null;
            this.stack = null;
            return this;
        }
    }

    return InitStack;
})();

// export default {InitStack};
