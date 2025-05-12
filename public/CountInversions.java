import java.util.*;

class CountInversions {

    public static int mergesortandcount(int[] arr, int low, int high) {
        int inversions = 0;
        if (low < high) {
            int mid = (low + high) / 2;
            inversions += mergesortandcount(arr, low, mid);
            inversions += mergesortandcount(arr, mid + 1, high);
            inversions += mergeandcount(arr, low, mid, high);
        }
        return inversions;
    }

    public static int mergeandcount(int[] arr, int low, int mid, int high) {
        int[] left = new int[mid - low + 1];
        int[] right = new int[high - mid];

        for (int i = 0; i < left.length; i++)
            left[i] = arr[i + low];
        for (int j = 0; j < right.length; j++)
            right[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = low, inversions = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
                inversions += left.length - i;
            }
        }

        while (i < left.length)
            arr[k++] = left[i++];

        while (j < right.length)
            arr[k++] = right[j++];

        return inversions;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();

        System.out.println(mergesortandcount(arr, 0, n - 1));
    }
}
