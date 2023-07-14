public class StaircaseRows {
    public static int countCompleteRows(int n) {
        int count = 0;
        int row = 1;

        while (n >= row) {
            n -= row;
            row++;
            count++;
        }

        return count;
    }

    public static void main(String[] args) {
        int n = 5;

        System.out.println("Input: n = " + n);

        int result = countCompleteRows(n);

        System.out.println("Output: " + result);
    }
}
