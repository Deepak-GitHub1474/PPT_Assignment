import java.util.Arrays;

public class SquaresOfSortedArray {
    public static int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        int left = 0;
        int right = n - 1;
        int idx = n - 1;

        while (left <= right) {
            int leftSquare = nums[left] * nums[left];
            int rightSquare = nums[right] * nums[right];

            if (leftSquare > rightSquare) {
                result[idx] = leftSquare;
                left++;
            } else {
                result[idx] = rightSquare;
                right--;
            }

            idx--;
        }

        return result;
    }

    public static void main(String[] args) {
        int[] nums = {-4, -1, 0, 3, 10};

        System.out.println("Input: " + Arrays.toString(nums));
        int[] result = sortedSquares(nums);
        System.out.println("Output: " + Arrays.toString(result));
    }
}
