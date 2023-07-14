public class MoveZeros {
    public static void moveZeroes(int[] nums) {
        int slow = 0; // Pointer for placing nonzero elements
        
        for (int fast = 0; fast < nums.length; fast++) {
            if (nums[fast] != 0) {
                nums[slow] = nums[fast];
                slow++;
            }
        }
        
        // Fill the remaining elements with zeros
        while (slow < nums.length) {
            nums[slow] = 0;
            slow++;
        }
    }
    
    public static void main(String[] args) {
        int[] nums = {0, 1, 0, 3, 12};
        moveZeroes(nums);
        
        System.out.print("Output: [");
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i]);
            if (i < nums.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }
}
