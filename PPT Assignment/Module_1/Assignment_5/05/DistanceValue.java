import java.util.Arrays;

public class DistanceValue {
    public static int distanceValue(int[] arr1, int[] arr2, int d) {
        int distance = 0;

        for (int num1 : arr1) {
            boolean found = false;

            for (int num2 : arr2) {
                if (Math.abs(num1 - num2) <= d) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                distance++;
            }
        }

        return distance;
    }

    public static void main(String[] args) {
        int[] arr1 = {4, 5, 8};
        int[] arr2 = {10, 9, 1, 8};
        int d = 2;

        System.out.println("Input:");
        System.out.println("arr1 = " + Arrays.toString(arr1));
        System.out.println("arr2 = " + Arrays.toString(arr2));
        System.out.println("d = " + d);

        int result = distanceValue(arr1, arr2, d);

        System.out.println("Output:");
        System.out.println(result);
    }
}
