public class BubbleSort {
    public static int[] bubbleSort(int[] array) {
        for(int i = 0; i < array.length; i++) {
            for(int j = 0; j < array.length - i - 1; j++) {
                int aux = 0;

                if(array[j] > array[j + 1]) {
                    aux = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = aux;
                }
            }
        }

        return array;
    }
}
