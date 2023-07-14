import java.util.Arrays;

public class MeetingRooms {
    public static boolean canAttendMeetings(int[][] intervals) {
        // Sort the intervals based on the start time
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        // Check for overlapping intervals
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < intervals[i - 1][1]) {
                // Overlapping intervals found, person cannot attend all meetings
                return false;
            }
        }

        // No overlapping intervals found, person can attend all meetings
        return true;
    }

    public static void main(String[] args) {
        int[][] intervals = {{0, 30}, {5, 10}, {15, 20}};
        System.out.println("Input: " + Arrays.deepToString(intervals));
        boolean result = canAttendMeetings(intervals);
        System.out.println("Output: " + result);
    }
}
