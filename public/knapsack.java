import java.util.Scanner;

public class knapsack {
    public static int Knapsack(int[] weights, int[] values, int n, int capacity) {
        int[][] dp = new int[n + 1][capacity + 1];

        // Build DP table
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(
                        values[i - 1] + dp[i - 1][w - weights[i - 1]],
                        dp[i - 1][w]
                    );
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }

        // Backtrack to find picked items
        int w = capacity;
        System.out.println("\nItems included in the knapsack:");
        for (int i = n; i > 0 && w > 0; i--) {
            if (dp[i][w] != dp[i - 1][w]) {
                System.out.println("Item " + i + " (Value: " + values[i - 1] + ", Weight: " + weights[i - 1] + ")");
                w -= weights[i - 1]; // reduce weight capacity
            }
        }

        return dp[n][capacity];
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number of items: ");
        int n = scanner.nextInt();

        int[] values = new int[n];
        int[] weights = new int[n];

        System.out.println("\nEnter the values of the items:");
        for (int i = 0; i < n; i++) {
            System.out.print("Value of item " + (i + 1) + ": ");
            values[i] = scanner.nextInt();
        }

        System.out.println("\nEnter the weights of the items:");
        for (int i = 0; i < n; i++) {
            System.out.print("Weight of item " + (i + 1) + ": ");
            weights[i] = scanner.nextInt();
        }

        System.out.print("\nEnter the capacity of the knapsack: ");
        int capacity = scanner.nextInt();

        int maxProfit = Knapsack(weights, values, n, capacity);
        System.out.println("\nMaximum profit achievable: " + maxProfit);

        scanner.close();
    }
}
