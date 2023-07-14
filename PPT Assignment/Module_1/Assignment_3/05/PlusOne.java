import java.util.Arrays;

public class PlusOne {
    public static int[] plusOne(int[] digits) {
        int n = digits.length;
        
        // Start from the least significant digit
        for (int i = n - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                // If the current digit is less than 9, simply increment it and return the updated array
                digits[i]++;
                return digits;
            } else {
                // If the current digit is 9, set it to 0 and continue to the next more significant digit
                digits[i] = 0;
            }
        }
        
        // If we reach here, it means all digits were 9, and we need to add an additional digit
        int[] newDigits = new int[n + 1];
        newDigits[0] = 1; // Set the most significant digit to 1
        return newDigits;
    }

    public static void main(String[] args) {
        int[] digits = {1, 2, 3};
        System.out.println("Input: " + Arrays.toString(digits));
        int[] result = plusOne(digits);
        System.out.println("Output: " + Arrays.toString(result));
    }
}
