import java.util.*;

public class DoubledArray {
    public static int[] findOriginalArray(int[] changed) {
        if (changed.length % 2 != 0) {
            return new int[0];
        }

        Map<Integer, Integer> countMap = new HashMap<>();
        for (int num : changed) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }

        Arrays.sort(changed);

        List<Integer> originalList = new ArrayList<>();
        for (int num : changed) {
            if (countMap.containsKey(num) && countMap.containsKey(num * 2) && countMap.get(num) > 0 && countMap.get(num * 2) > 0) {
                originalList.add(num);
                countMap.put(num, countMap.get(num) - 1);
                countMap.put(num * 2, countMap.get(num * 2) - 1);
            }
        }

        if (originalList.size() != changed.length / 2) {
            return new int[0];
        }

        int[] originalArray = new int[originalList.size()];
        for (int i = 0; i < originalList.size(); i++) {
            originalArray[i] = originalList.get(i);
        }

        return originalArray;
    }

    public static void main(String[] args) {
        int[] changed = {1, 3, 4, 2, 6, 8};
        int[] original = findOriginalArray(changed);
        System.out.println("Output: " + Arrays.toString(original));
    }
}
