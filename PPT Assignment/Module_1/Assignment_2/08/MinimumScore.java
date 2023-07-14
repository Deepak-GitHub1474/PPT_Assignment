public class MinimumScore {
    public static int minScore(int[] nums, int k) {
        int minScore = Integer.MAX_VALUE;
        int maxScore = Integer.MIN_VALUE;

        // Find the initial maximum and minimum elements
        for (int num : nums) {
            minScore = Math.min(minScore, num);
            maxScore = Math.max(maxScore, num);
        }

        // Case 1: Difference within range [-k, k]
        if (maxScore - minScore <= 2 * k) {
            return 0;
        }

        // Case 2: Adjust maximum and minimum elements
        return maxScore - minScore - 2 * k;
    }

    public static void main(String[] args) {
        int[] nums = {1};
        int k = 0;
        int result = minScore(nums, k);

        System.out.println("Output: " + result);
    }
}
