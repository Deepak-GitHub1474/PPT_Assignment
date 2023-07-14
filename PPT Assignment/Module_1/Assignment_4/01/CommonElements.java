import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CommonElements {
    public static List<Integer> commonElements(int[] arr1, int[] arr2, int[] arr3) {
        List<Integer> result = new ArrayList<>();

        int i = 0, j = 0, k = 0;

        while (i < arr1.length && j < arr2.length && k < arr3.length) {
            int num1 = arr1[i];
            int num2 = arr2[j];
            int num3 = arr3[k];

            if (num1 == num2 && num2 == num3) {
                result.add(num1);
                i++;
                j++;
                k++;
            } else if (num1 <= num2 && num1 <= num3) {
                i++;
            } else if (num2 <= num1 && num2 <= num3) {
                j++;
            } else {
                k++;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {1, 2, 5, 7, 9};
        int[] arr3 = {1, 3, 4, 5, 8};

        System.out.println("Input:");
        System.out.println("arr1 = " + Arrays.toString(arr1));
        System.out.println("arr2 = " + Arrays.toString(arr2));
        System.out.println("arr3 = " + Arrays.toString(arr3));

        List<Integer> result = commonElements(arr1, arr2, arr3);

        System.out.println("Output: " + result);
    }
}
