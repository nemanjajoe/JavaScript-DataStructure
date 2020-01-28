// order list is the list logic with the sequential storage;
var IniteList = (() => {
    var 
        isEmpty = () => {
            if (list.length === 0) return "empty";
            else return "not empty";
        },
        length = () => {
            return list.length;
        },
        getElem = (i) => {
            if (i >= 0 && i <= list.length) return list[--i];
            else return false;
        },
        locateElem = (e, compare) => {
            var outcome = 0;
            if (compare === undefined) {
                for (let i = 0; i < list.length; i++){
                    if (e === list[i]) {
                        outcome = i;
                        break;
                    }
                }
                return outcome;
            }else {
                for (let i = 0; i < list.length; i++){
                    if (compare(e, list[i]) === true) {
                        outcome = i;
                        break;
                    }
                }
                return outcome;
            }
        },
        priorElem = (e) => {
            var index = locateElem(e);
            return list[--index];
        },
        nextElem = (e) => {
            var index = locateElem(e);
            return list[++index];
        },
        clear = () => {
            list = [];
            return list;
        },
        insert = (i, e) => {
            if (i > 0 && i <= list.length) {
                for (let j = list.length; j >= i; j--){
                    list[j] = list[j - 1];
                }
                list[i] = e;
            }else {
                return "type error!"
            }
            return list;
        },
        deleteElem = (i) => {
            if (i > 0 && i <= list.length) {
                for (let j = i; j <= list.length; j++){
                    list[j - 1] = list[j];
                }
            }else {
                return "type error!"
            }
            return list;
        },
        traverse = (visit) => {
            for (let i = 0; i < list.length; i++){
                visit(list[i]);
            }
        };
    return function IniteList (arr) { 
        list = arr;
        this.destroy = () => {
            this.list = null;
        };
        this.isEmpty = isEmpty;
        this.length = length;
        this.getElem = getElem;
        this.locateElem = locateElem;
        this.priorElem = priorElem;
        this.nextElem = nextElem;
        this.clear = clear;
        this.insert = insert;
        this.deleteElem = deleteElem;
        this.traverse = traverse;
        this.list = list;
    };
})();

var test = new IniteList([1,2,3,4,5,6]);
console.log(test.list);
test.insert(2, "here");
console.log(test.list);
console.log(test.isEmpty());
console.log(test.getElem(3));
console.log(test.length());
console.log(test.nextElem(2));
console.log(test.deleteElem(2));