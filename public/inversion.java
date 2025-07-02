import java.util.*;

public class inversion {

    static int merge(int[] arr, int low, int mid, int high) {
        ArrayList<Integer> temp = new ArrayList<>();
        int left = low;
        int right = mid + 1;
        int invCount = 0;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.add(arr[left++]);
            } else {
                temp.add(arr[right++]);
                invCount += (mid - left + 1);
            }
        }

        while (left <= mid) temp.add(arr[left++]);
        while (right <= high) temp.add(arr[right++]);

        for (int i = low; i <= high; i++) arr[i] = temp.get(i - low);

        return invCount;
    }

    static int mergesort(int[] arr, int low, int high) {
        int invCount = 0;
        if (low < high) {
            int mid = (low + high) / 2;
            invCount += mergesort(arr, low, mid);
            invCount += mergesort(arr, mid + 1, high);
            invCount += merge(arr, low, mid, high);
        }
        return invCount;
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int users = 3;
        int songs = 8;

        int[][] playlists = new int[users][songs];
        int[] inversions = new int[users];

        // Input
        for (int i = 0; i < users; i++) {
            System.out.println("Enter playlist for User " + (i + 1) + " (8 numbers from 1 to 8):");
            for (int j = 0; j < songs; j++) {
                playlists[i][j] = s.nextInt();
            }
        }

        // Inversion count per user
        for (int i = 0; i < users; i++) {
            int[] copy = Arrays.copyOf(playlists[i], songs);
            inversions[i] = mergesort(copy, 0, songs - 1);
        }

        // Print inversion counts
        System.out.println("\nInversion Counts:");
        for (int i = 0; i < users; i++) {
            System.out.println("User " + (i + 1) + ": " + inversions[i]);
        }

        // Recommendation
        System.out.println("\nRecommendations:");
        for (int i = 0; i < users; i++) {
            int minUser = -1;
            int minInv = Integer.MAX_VALUE;
            for (int j = 0; j < users; j++) {
                if (i != j && inversions[j] < minInv) {
                    minInv = inversions[j];
                    minUser = j;
                }
            }
            System.out.println("User " + (i + 1) + " is recommended playlist of User " + (minUser + 1));
        }

        s.close();
    }
}
