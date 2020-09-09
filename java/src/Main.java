public class Main {
    public static void main(String[] args) {
        int[] array = { 2, 7, 4, 1, 10, 9, 6, 3, 5, 8 };
        int[] arr = { 20, 5, 21, 6, 23, 7, 34, 68, 999, 72, 3, 100 };

        BubbleSort.bubbleSort(array);
        SelectSort.selectionSort(arr);

        for(int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }

        for(int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}
