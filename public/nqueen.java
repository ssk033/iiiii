import java.util.Scanner;

public class nqueen {

    static boolean isSafe(int[] board, int row, int col) {
        for (int i = 0; i < row; i++)
            if (board[i] == col || Math.abs(board[i] - col) == Math.abs(i - row))
                return false;
        return true;
    }

    static boolean solve(int[] board, int row, int n) {
        if (row == n) return true;
        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row] = col;
                if (solve(board, row + 1, n)) return true;
            }
        }
        return false;
    }

    static void print(int[] board, int n) {
        System.out.println("\nOne valid secure server placement:\n");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++)
                System.out.print((board[i] == j ? "S " : ". "));
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter grid size (N): ");
        int n = sc.nextInt();
        if (n <= 0) {
            System.out.println("N must be > 0");
            return;
        }

        int[] board = new int[n];
        if (solve(board, 0, n)) print(board, n);
        else System.out.println("No valid placement exists for N = " + n);
    }
}