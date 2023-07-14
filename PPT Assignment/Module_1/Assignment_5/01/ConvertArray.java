import java.util.Arrays;

public class ConvertArray {
    public static int[][] construct2DArray(int[] original, int m, int n) {
        int[][] result = new int[m][n];
        
        if (original.length != m * n) {
            return new int[0][0];
        }

        int index = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                result[i][j] = original[index++];
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] original = {1, 2, 3, 4};
        int m = 2;
        int n = 2;

        System.out.println("Input:");
        System.out.println("original = " + Arrays.toString(original));
        System.out.println("m = " + m);
        System.out.println("n = " + n);

        int[][] result = construct2DArray(original, m, n);

        System.out.println("Output:");
        for (int[] row : result) {
            System.out.println(Arrays.toString(row));
        }
    }
}
