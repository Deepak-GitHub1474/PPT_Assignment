import java.util.Arrays;

public class MaximumProduct {
    public static int maximumProduct(int[] nums) {
        Arrays.sort(nums);
        
        int n = nums.length;
        
        // Case 1: All non-negative or zero
        int maxProduct1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
        
        // Case 2: Negative numbers present
        int maxProduct2 = nums[0] * nums[1] * nums[n - 1];
        
        return Math.max(maxProduct1, maxProduct2);
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        int result = maximumProduct(nums);
        
        System.out.println("Output: " + result);
    }
}
