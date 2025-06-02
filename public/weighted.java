import java.util.*;

class DramaRequest {
    int start, finish, value;

    DramaRequest(int s, int f, int v) {
        start = s;
        finish = f;
        value = v;
    }
}

public class weighted {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of drama schools: ");
        int n = sc.nextInt();

        DramaRequest[] requests = new DramaRequest[n];

        for (int i = 0; i < n; i++) {
            System.out.println("\nEnter details for Drama School " + (i + 1) + ":");
            System.out.print("Start time: ");
            int start = sc.nextInt();
            System.out.print("Finish time: ");
            int finish = sc.nextInt();
            System.out.print("Value: ");
            int value = sc.nextInt();

            requests[i] = new DramaRequest(start, finish, value);
        }

        Arrays.sort(requests, (a, b) -> a.finish - b.finish);

        int[] dp = new int[n];
        dp[0] = requests[0].value;

        for (int i = 1; i < n; i++) {
            int includeProfit = requests[i].value;
            int lastCompatible = -1;
            for (int j = i - 1; j >= 0; j--) {
                if (requests[j].finish <= requests[i].start) {
                    lastCompatible = j;
                    break;
                }
            }
            if (lastCompatible != -1) {
                includeProfit += dp[lastCompatible];
            }

            dp[i] = Math.max(includeProfit, dp[i - 1]);
        }

        System.out.println("\nMaximum Profit: " + dp[n - 1]);

        sc.close();
    }
}
