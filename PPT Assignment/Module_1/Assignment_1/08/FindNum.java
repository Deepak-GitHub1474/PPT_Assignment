public class FindNum {
    public static int[] findNum(int[] nums) {
        int[] result = new int[2];
        int n = nums.length;
        int sum = 0;

        for (int num : nums) {
            int index = Math.abs(num) - 1;
            if (nums[index] < 0) {
                result[0] = Math.abs(num);
            } else {
                nums[index] = -nums[index];
            }
            sum += Math.abs(num);
        }

        result[1] = n * (n + 1) / 2 - sum + result[0];

        return result;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 4};
        int[] result = findNum(nums);

        System.out.print("Output: [");
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
            if (i < result.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }
}
