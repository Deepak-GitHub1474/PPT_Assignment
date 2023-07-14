import java.util.HashMap;
import java.util.Map;

public class LongestHarmoniousSubsequence {
    public static int findLHS(int[] nums) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        
        // Count the frequency of each number
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        int longestSubsequence = 0;
        
        // Find the length of the longest harmonious subsequence
        for (int num : nums) {
            if (frequencyMap.containsKey(num + 1)) {
                int subsequenceLength = frequencyMap.get(num) + frequencyMap.get(num + 1);
                longestSubsequence = Math.max(longestSubsequence, subsequenceLength);
            }
        }
        
        return longestSubsequence;
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 3, 2, 2, 5, 2, 3, 7};
        int result = findLHS(nums);
        
        System.out.println("Output: " + result);
    }
}
