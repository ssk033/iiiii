import java.util.*;

public class nqueens {
    static int N;
    static int solutionCount = 0;

    // Check if placing queen at (row, col) is safe
    public static boolean isSafe(int[] queens, int row, int col) {
        for (int i = 0; i < col; i++) 
        {
            if (queens[i] == row || Math.abs(queens[i] - row) == Math.abs(i - col)) {
                return false;
            }
        }
        return true;
    }

    // Print board and queen coordinates
    public static void printBoard(int[] queens) {
        System.out.println("\nChessboard:");
        for (int i = 0; i < N; i++) 
        {
            for (int j = 0; j < N; j++) 
            {
                if (queens[j] == i)
                    System.out.print(" Q ");
                else
                    System.out.print(" . ");
            }
            System.out.println();
        }

        System.out.println("Queen Coordinates (row, col):");
        for (int col = 0; col < N; col++) 
        {
            System.out.println("Q at (" + queens[col] + ", " + col + ")");
        }
        System.out.println("------------------------------------------------");
    }

    // Recursive N-Queens solver
    public static void solveNQ(int[] queens, int col) {
        if (col == N) 
        {
            solutionCount++;
            System.out.println("Solution " + solutionCount + ":");
            printBoard(queens);
            return;
        }

        for (int row = 0; row < N; row++) 
        {
            if (isSafe(queens, row, col)) 
            {
                queens[col] = row;
                solveNQ(queens, col + 1);
            }
        }
    }

    // Main method
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the value of N: ");
        N = sc.nextInt();

        int[] queens = new int[N];
        solveNQ(queens,0);

        System.out.println("Total number of solutions: " + solutionCount);
        sc.close();
   }
}