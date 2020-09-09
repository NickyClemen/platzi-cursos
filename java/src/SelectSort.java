public class SelectSort {
    public static int[] selectionSort(int[] array) {
        for(int i = 0; i < array.length; i++) {
            for(int j = i + 1; j < array.length; j++) {
                int aux;
                int indexDex = i;

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
}
