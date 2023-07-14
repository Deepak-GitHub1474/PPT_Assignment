import java.util.ArrayList;
import java.util.List;

public class MissingRanges {
    public static List<String> findMissingRanges(int[] nums, int lower, int upper) {
        List<String> result = new ArrayList<>();
        int n = nums.length;
        addRange(result, lower - 1, nums[0]);
        
        for (int i = 1; i < n; i++) {
            addRange(result, nums[i - 1], nums[i]);
        }

        addRange(result, nums[n - 1], upper + 1);

        return result;
    }

    private static void addRange(List<String> result, int start, int end) {
        if (start + 1 == end) {
            result.add(String.valueOf(start + 1));
        } else if (start + 1 < end) {
            result.add((start + 1) + "->" + (end - 1));
        }
    }

    public static void main(String[] args) {
        int[] nums = {0, 1, 3, 50, 75};
        int lower = 0;
        int upper = 99;
        List<String> result = findMissingRanges(nums, lower, upper);

        System.out.println("Output: " + result);
    }
}
