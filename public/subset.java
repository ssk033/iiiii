import java.util.*;

public class subset {

    static boolean isSubsetSum(int[] set, int n, int sum, List<Integer> subset) {
        if (sum == 0)
            return true;
        if (n == 0)
            return false;

        if (set[n - 1] > sum)
            return isSubsetSum(set, n - 1, sum, subset);

        if (isSubsetSum(set, n - 1, sum, subset))
            return true;

        subset.add(set[n - 1]);
        if (isSubsetSum(set, n - 1, sum - set[n - 1], subset))
            return true;

        subset.remove(subset.size() - 1);
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of elements in the set: ");
        int n = sc.nextInt();

        int[] set = new int[n];
        System.out.println("Enter the elements of the set:");
        for (int i = 0; i < n; i++) {
            System.out.print("Element " + (i + 1) + ": ");
            set[i] = sc.nextInt();
        }

        System.out.print("Enter the target sum to find: ");
        int sum = sc.nextInt();

        List<Integer> subset = new ArrayList<>();

        if (isSubsetSum(set, n, sum, subset)) {
            System.out.println("\nFound a subset with the given sum:");
            for (int num : subset)
                System.out.print(num + " ");
        } else {
            System.out.println("\nNo subset with the given sum was found.");
        }

        sc.close();
    }
}
