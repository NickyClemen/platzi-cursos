let array = [20, 5, 21, 6, 23, 7, 34, 68, 999, 72, 3, 100];

const selectionSort = array => {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            let aux;
            let indexDex = i;
    
            if(array[indexDex] > array[j]) {
                indexDex = j;
            }

            aux = array[indexDex];
            array[indexDex] = array[i];
            array[i] = aux;
        }

    }

    return array;
}

selectionSort(array);

array.forEach(i => console.log(i));