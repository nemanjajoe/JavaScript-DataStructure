var InitPQueue = (() => {
    return class InitPQueue {
        constructor() {
            this.queue = new Array();
            this.length = 0;
        }
        clear() {
            this.queue = new Array();
        }
        isEmpty() {
            return this.length === 0 ? "empty" : "not empty";
        }
        getLength() {
            return this.length;
        }
        getFront() {
            let priorest = this.queue[0];
            for (let i = 0; i < this.length; i++) {
                if (this.queue[i] > front) {
                    priorest = this.queue[i];
                }
            }
            return priorest;
        }
        pInsert(element) {
            this.queue[this.length] = element;
            this.length++;
            return this.queue;
        }
        pDelete() {
            if (this.length === 0) {
                return false;
            } else {
                let priorestIndex = 0,
                    priorest;
                for (let i = 1; i < this.length - 1; i++) {
                    if (this.queue[priorestIndex] < this.queue[i]) {
                        priorestIndex = i;
                    }
                }
                priorest = this.queue[priorestIndex];
                for (let i = priorestIndex; i < this.length ; i++) {
                    this.queue[i] = this.queue[i + 1];
                }
                this.length--;
                return priorest;
            }
        }
    }
})();

var test = new InitPQueue();
test.pInsert(3);
test.pInsert(6);
test.pInsert(1);
console.log(test);
test.pDelete();
console.log(test);
