import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FindDuplicates {
    public static List<Integer> findDuplicates(int[] nums) {
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            int index = Math.abs(nums[i]) - 1;
            
            if (nums[index] < 0) {
                result.add(Math.abs(nums[i]));
            } else {
                nums[index] = -nums[index];
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] nums = {4, 3, 2, 7, 8, 2, 3, 1};

        System.out.println("Input: " + Arrays.toString(nums));

        List<Integer> result = findDuplicates(nums);

        System.out.println("Output: " + result);
    }
}
