import java.util.Arrays;

public class SquareSort {
    public static int[] sortedSquares(int[] nums) {
        int[] squares = new int[nums.length];

        for (int i = 0; i < nums.length; i++) {
            squares[i] = nums[i] * nums[i];
        }

        Arrays.sort(squares);

        return squares;
    }

    public static void main(String[] args) {
        int[] nums = {-4, -1, 0, 3, 10};

        System.out.println("Input: nums = " + Arrays.toString(nums));

        int[] result = sortedSquares(nums);

        System.out.println("Output: " + Arrays.toString(result));
    }
}
