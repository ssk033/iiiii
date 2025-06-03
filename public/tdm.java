import java.util.Scanner;

public class tdm {
    public static void main(String args[]) {
        int n, i, qt, count = 0, temp, sq = 0;
        int bt[], wt[], tat[], rem_bt[];
        float awt = 0, atat = 0;

        bt = new int[10];
        wt = new int[10];
        tat = new int[10];
        rem_bt = new int[10];

        Scanner s = new Scanner(System.in);

        System.out.print("Enter the number of stations (maximum 10) = ");
        n = s.nextInt();

        System.out.println("Enter the processing time for each channel");
        for (i = 0; i < n; i++) {
            System.out.print("S" + i + " = ");
            bt[i] = s.nextInt();
            rem_bt[i] = bt[i];
        }

        System.out.print("Enter the frame size: ");
        qt = s.nextInt();

        while (true) {
            count = 0;
            for (i = 0; i < n; i++) {
                temp = qt;

                if (rem_bt[i] == 0) {
                    count++;
                    continue;
                }

                if (rem_bt[i] > qt) {
                    rem_bt[i] = rem_bt[i] - qt;
                } else if (rem_bt[i] > 0) {
                    temp = rem_bt[i];
                    rem_bt[i] = 0;
                }

                sq = sq + temp;
                tat[i] = sq;
            }
            if (count == n)
                break;
        }

        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("Station\t Processing Time\t Completion Time\t Waiting Time");
        System.out.println("--------------------------------------------------------------------------------");

        for (i = 0; i < n; i++) {
            wt[i] = tat[i] - bt[i];
            awt += wt[i];
            atat += tat[i];
            System.out.println("\t" + (i + 1) + "\t \t" + bt[i] + "\t\t " + tat[i] + "\t\t\t " + wt[i]);
        }

        System.out.printf("Average Waiting Time: %.2f\n", awt / n);
        System.out.printf("Average Turnaround Time: %.2f\n", atat / n);

        s.close();
    }
}
