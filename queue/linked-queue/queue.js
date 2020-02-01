var InitQueue = (() => {
    var Node = (() => {
        return class Node {
            constructor(element) {
                this.element = element;
                this.next = null;
            }
        }
    })();
    class InitQueue {
        constructor() {
            this.trail = null;
            this.head = null;
            this.length = 0;
        }
        clear() {
            this.trail = this.head = null;
            return this.head;
        }
        isEmpty() {
            return this.length === 0;
        }
        getLength() {
            return this.length;
        }
        getHead() {
            return this.head;
        }
        enQueue(element) {
            if (this.head === null) {
                this.head = new Node(element);
            } else {
                let currentNode = this.head;
                while (currentNode.next != null) {
                    currentNode = currentNode.next;
                }
                currentNode.next = this.trail = new Node(element);
            }
            this.length++;
            return this.trail;
        }
        deQueue() {
            if (this.head.next === null) {
                this.trail = null;
                this.head = null;
                this.length = 0;
                return false;
            } else {
                this.head = this.head.next;
                this.length--;
                return this.head;
            }
        }
        traverse(visit) {
            if (this.length === 0) {
                return false;
            } else {
                let currentNode = this.head;
                while (currentNode.next != null) {
                    currentNode.element = visit(currentNode.element);
                    currentNode = currentNode.next;
                }
                return this.head;
            }
        }
    }
    return InitQueue;
})();