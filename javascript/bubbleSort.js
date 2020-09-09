const array = [2, 7, 4, 1, 10, 9, 6, 3, 5, 8];

const bubbleSort = array => {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - i - 1; j++) {
            let aux;
    
            if(array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }

    return array;
}

bubbleSort(array);

array.forEach(i => console.log(i));


