const BasicSort = (() => {
    let exchange = (array, i, j) => {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        },
        // generate a number between 0 to 9 ramdomly
        randomNumber = () => {
            return Math.floor(Math.random() * 100);
        },
        // generate a random array whose length is offsetting 15; 
        randomArray = (length = 20) => {
            let arr = new Array(length);
            while (length) {
                arr[length - 1] = randomNumber();
                length--;
            }
            return arr;
        };
    return class BasicSort {
        constructor(originArray = randomArray()) {
            this.originArray = originArray;
            this.sortArray = originArray.slice();
            this.bubbleSort();
        }
        getRamdonArray() {
            return randomArray();
        }
        bubbleSort(array = this.sortArray) {
            if (!Array.isArray(array)) return false;

            let left = 0,
                right = array.length - 1;
            for (let i = left; i < right; i++) {
                for (let j = right; j > i; j--) {
                    if (array[j] < array[j - 1]) {
                        exchange(array,j,j - 1);
                    }
                }
            }
            return array;
        }
        insertSort(array = this.sortArray) {
            if (!Array.isArray(array)) return false;

            let left = 0,
                right = array.length - 1;
            for (let i = right; i > left; i--) {
                if (array[i] < array[i - 1]) {
                    exchange(array,i,i - 1);
                }
            }
            for (let i = left + 2; i <= right; i++) {
                let j = i,
                    tag = array[i];
                while (tag < array[j - 1]) {
                    array[j] = array[j - 1];
                    j--;
                }
                array[j] = tag;
            }
            return array;
        }
        selectSort(array = this.sortArray) {
            if (!Array.isArray(array)) return false;

            let left = 0,
                right = array.length - 1;
            for (let i = left; i < right; i++) {
                let min = i;
                for (let j = i + 1; j <= right; j++) {
                    if (array[min] > array[j]) min = j;
                }
                exchange(array,i,min);
            }
            return array;
        }
        test() {
            let testBubble = this.originArray.slice(),
                testInsert = this.originArray.slice(),
                testSelect = this.originArray.slice(),
                info;
            info = "bubbleSorting: " + this.bubbleSort(testBubble).toString();
            info += "\n insertSorting: " + this.insertSort(testInsert).toString();
            info += "\n selectSorting: " + this.selectSort(testSelect).toString();
            console.log(info);
        }
    }
})();