import java.util.Scanner;

public class leaky {
    public static void main(String[] args) {
        int buck_rem = 0, buck_cap = 4, rate = 3, sent, recv;

        Scanner in = new Scanner(System.in);
        System.out.print("Enter the number of packets: ");
        int n = in.nextInt();

        int[] a = new int[n];
        System.out.println("Enter the packet sizes:");
        for (int i = 0; i < n; i++) {
            a[i] = in.nextInt();
        }

        System.out.println("\nClock\tPacket Size\tAccept\t\tSent\tRemaining");
        for (int i = 0; i < n; i++) {
            if (a[i] != 0) {
                if (buck_rem + a[i] > buck_cap) {
                    recv = -1; // packet dropped
                } else {
                    recv = a[i];
                    buck_rem += a[i];
                }
            } else {
                recv = 0;
            }

            if (buck_rem != 0) {
                if (buck_rem < rate) {
                    sent = buck_rem;
                    buck_rem = 0;
                } else {
                    sent = rate;
                    buck_rem -= rate;
                }
            } else {
                sent = 0;
            }

            if (recv == -1) {
                System.out.println((i + 1) + "\t\t" + a[i] + "\t\tDropped\t\t" + sent + "\t" + buck_rem);
            } else {
                System.out.println((i + 1) + "\t\t" + a[i] + "\t\t" + recv + "\t\t" + sent + "\t" + buck_rem);
            }
        }

        in.close();
    }
}
