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
        System.out.print("Enter number of requests: ");
        int n = sc.nextInt();

        DramaRequest[] req = new DramaRequest[n];
        for (int i = 0; i < n; i++) {
            System.out.print("\nStart: ");
            int s = sc.nextInt();
            System.out.print("Finish: ");
            int f = sc.nextInt();
            System.out.print("Value: ");
            int v = sc.nextInt();
            req[i] = new DramaRequest(s, f, v);
        }

        // Sort by finish time
        Arrays.sort(req, Comparator.comparingInt(a -> a.finish));

        int[] dp = new int[n];
        int[] prev = new int[n];

        // Find last non-conflicting job for each job
        for (int i = 0; i < n; i++) {
            prev[i] = -1;
            for (int j = i - 1; j >= 0; j--) 
            {
                if (req[j].finish <= req[i].start) 
                {
                    prev[i] = j;
                    break;
                }
            }
        }

        dp[0] = req[0].value;

        for (int i = 1; i < n; i++) 
        {
            int include = req[i].value;
            if (prev[i] != -1)
            { 
                include += dp[prev[i]];
            }
            dp[i] = Math.max(include, dp[i - 1]);
        }

        System.out.println("\nMax Profit: " + dp[n - 1]);

        // Backtrack to find selected intervals
        ArrayList<DramaRequest> selected = new ArrayList<>();
        for (int i = n - 1; i >= 0;) {
            int include = req[i].value + (prev[i] != -1 ? dp[prev[i]] : 0);
            if (include > (i > 0 ? dp[i - 1] : 0)) {
                selected.add(req[i]);
                i = prev[i];
            } else {
                i--;
            }
        }

        System.out.println("\nSelected Intervals:");
        Collections.reverse(selected);
        for (DramaRequest r : selected)
            System.out.println("[" + r.start + ", " + r.finish + "] -> " + r.value);

        sc.close();
    }
}
