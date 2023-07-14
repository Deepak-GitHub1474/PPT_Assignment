public class StaircaseRows {
    public static int arrangeCoins(int n) {
        long left = 0;
        long right = n;

        while (left <= right) {
            long mid = left + (right - left) / 2;
            long curr = mid * (mid + 1) / 2;

            if (curr == n) {
                return (int) mid;
            } else if (curr < n) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return (int) right;
    }

    public static void main(String[] args) {
        int n = 5;

        System.out.println("Input: " + n);
        int result = arrangeCoins(n);
        System.out.println("Output: " + result);
    }
}
