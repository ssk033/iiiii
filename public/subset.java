import java.util.Scanner;

public class subset {

    static boolean isSubsetSum(int[] set, int n, int sum) {
        if (sum == 0)
            return true;
        if (n == 0)
            return false;
        if (set[n - 1] > sum)
            return isSubsetSum(set, n - 1, sum);
        return isSubsetSum(set, n - 1, sum) || isSubsetSum(set, n - 1, sum - set[n - 1]);
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

        if (isSubsetSum(set, n, sum)) {
            System.out.println("\n Found a subset with the given sum.");
        } else {
            System.out.println("\n No subset with the given sum was found.");
        }

        sc.close();
    }
}
