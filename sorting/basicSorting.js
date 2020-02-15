const BasicSort = (() => {
    let exchange = (varable1, varable2) => {
            let temp = varable1;
            varable1 = varable2;
            varable2 = temp;
        },
        // generate a number between 0 to 9 ramdomly
        randomNumber = () => {
            return Math.floor(Math.random()*10);
        },
        // generate a random array whose length is between 2 and 20 ramdomly; 
        randomArray = (length = 2*(randomNumber() + 1)) => {
            let arr = new Array(length);
            while(length) {
                arr[length - 1] = randomNumber()*10;
                length--;
            }
            return arr;
        };
    return class BasicSort {
        constructor(originArray = randomArray(20)) {
            this.originArray = originArray;
            this.sortArray;
        }
        getRamdonArray() {
            return randomArray();
        }
        bubbleSort(array = this.originArray) {
            if (!Array.isArray(array)) return false;

            let left = 0,
                right = array.length - 1;
            for (let i = left; i < right; i++) {
                for (let j = right; j > i; j--){
                    if (array[j] < array[j - 1]) {
                        exchange(array[j], array[j - 1]);
                    }
                }
            }
            return array;
        }
         
    }
})();