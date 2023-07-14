import java.util.*;

public class DistinctIntegers {
    public static List<List<Integer>> findDistinctIntegers(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();

        for (int num : nums1) {
            set1.add(num);
        }

        for (int num : nums2) {
            if (!set1.contains(num)) {
                set2.add(num);
            }
        }

        List<List<Integer>> answer = new ArrayList<>();
        answer.add(new ArrayList<>(set2)); // Distinct integers in nums1 not present in nums2
        answer.add(new ArrayList<>(set1)); // Distinct integers in nums2 not present in nums1

        return answer;
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 2, 3};
        int[] nums2 = {2, 4, 6};

        System.out.println("Input:");
        System.out.println("nums1 = " + Arrays.toString(nums1));
        System.out.println("nums2 = " + Arrays.toString(nums2));

        List<List<Integer>> result = findDistinctIntegers(nums1, nums2);

        System.out.println("Output:");
        System.out.println(result);
    }
}
