import java.util.*;

public class galeshapely1 {

    static int N;
    static Map<Character, Integer> manMap = new HashMap<>();
    static Map<Character, Integer> womanMap = new HashMap<>();
    static char[] indexToMan;
    static char[] indexToWoman;

    static boolean prefersNewProposal(int[][] womenPref, int w, int m, int m1) {
        for (int i = 0; i < N; i++) {
            if (womenPref[w][i] == m)
                return true;
            if (womenPref[w][i] == m1)
                return false;
        }
        return false;
    }

    static void stableMarriage(int[][] menPref, int[][] womenPref) {
        int[] womanPartner = new int[N];
        boolean[] manFree = new boolean[N];
        Arrays.fill(womanPartner, -1);
        Arrays.fill(manFree, false);

        int freeCount = N;

        while (freeCount > 0) {
            int m;
            for (m = 0; m < N; m++)
                if (!manFree[m])
                    break;

            for (int i = 0; i < N && !manFree[m]; i++) {
                int w = menPref[m][i];

                if (womanPartner[w] == -1) {
                    womanPartner[w] = m;
                    manFree[m] = true;
                    freeCount--;
                } else {
                    int m1 = womanPartner[w];
                    if (prefersNewProposal(womenPref, w, m, m1)) {
                        womanPartner[w] = m;
                        manFree[m] = true;
                        manFree[m1] = false;
                    }
                }
            }
        }

        // Output the stable pairs
        System.out.println("\nFinal Stable Matches:");
        System.out.println("Woman   Man");
        for (int i = 0; i < N; i++)
            System.out.println("  " + indexToWoman[i] + "    -   " + indexToMan[womanPartner[i]]);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of men/women (N): ");
        N = sc.nextInt();
        sc.nextLine(); // Consume newline

        indexToMan = new char[N];
        indexToWoman = new char[N];

        System.out.print("Enter characters representing men (e.g. A B C): ");
        String[] men = sc.nextLine().split(" ");
        for (int i = 0; i < N; i++) {
            manMap.put(men[i].charAt(0), i);
            indexToMan[i] = men[i].charAt(0);
        }

        System.out.print("Enter characters representing women (e.g. X Y Z): ");
        String[] women = sc.nextLine().split(" ");
        for (int i = 0; i < N; i++) {
            womanMap.put(women[i].charAt(0), i);
            indexToWoman[i] = women[i].charAt(0);
        }

        int[][] menPref = new int[N][N];
        int[][] womenPref = new int[N][N];

        System.out.println("\nEnter Men's preference lists:");
        for (int i = 0; i < N; i++) {
            char manChar = indexToMan[i];
            System.out.print("Preferences for Man " + manChar + ": ");
            String[] prefs = sc.nextLine().split(" ");
            for (int j = 0; j < N; j++) {
                menPref[i][j] = womanMap.get(prefs[j].charAt(0));
            }
        }

        System.out.println("\nEnter Women's preference lists:");
        for (int i = 0; i < N; i++) {
            char womanChar = indexToWoman[i];
            System.out.print("Preferences for Woman " + womanChar + ": ");
            String[] prefs = sc.nextLine().split(" ");
            for (int j = 0; j < N; j++) {
                womenPref[i][j] = manMap.get(prefs[j].charAt(0));
            }
        }

        stableMarriage(menPref, womenPref);
        sc.close();
    }
}
