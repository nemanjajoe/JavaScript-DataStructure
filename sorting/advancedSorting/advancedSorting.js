const AdvancedSort = (() => {
    let exchange = (array, i, j) => {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        },
        // generate a number between 0 to 9 ramdomly
        randomNumber = () => {
            return Math.floor(Math.random() * 100);
        },
        // generate a random array whose length is offsetting 20; 
        randomArray = (length = 20) => {
            let arr = new Array(length);
            while (length) {
                arr[length - 1] = randomNumber();
                length--;
            }
            return arr;
        },
        partition = (array, left, right) => {
            let i = left,
                j = right,
                divided = array[right];
            while (1) {
               while (array[i] <= divided) {
                   if (i === j ) break;
                   i++;
               }
               while (array[j] >= divided) {
                   if (j === i) break;
                   j--;
               }
               if (i >= j) break;
               exchange(array, i, j);
            }
            exchange(array, i, right);
            return i;
        };

    return class AdvancedSort {
        constructor (array = randomArray()) {
            this.originArray = array;
            this.sortArray = this.originArray.slice();
            this.quickSort();
        }
        quickSort(array = this.sortArray, left = 0, right = this.sortArray.length - 1) {
        
            if (left >= right) return;
            
            let pose = partition(array, left, right);
            this.quickSort(array, left, pose - 1);
            this.quickSort(array, pose + 1, right);
        }
    }
})();