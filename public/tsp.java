import java.util.Scanner;

public class tsp {
    static int n;
    static int[][] dist;
    static boolean[] visited;
    static int minCost = Integer.MAX_VALUE;
    static int[] bestPath;
    static int[] currentPath;

    public static void Tsp(int currentPos, int count, int cost, int start) 
    {
        if (count == n && dist[currentPos][start] > 0) 
        {
            int totalCost = cost + dist[currentPos][start];
            if (totalCost < minCost) 
            {
                minCost = totalCost;
                System.arraycopy(currentPath, 0, bestPath, 0, n);
            }
            return;
        }

        for (int i = 0; i < n; i++) 
        {
            if (!visited[i] && dist[currentPos][i] > 0) 
            {
                visited[i] = true;
                currentPath[count] = i;
                Tsp(i, count + 1, cost + dist[currentPos][i], start);
                visited[i] = false;
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of cities: ");
        n = sc.nextInt();
        dist = new int[n][n];
        System.out.println("Enter the distance matrix row by row:");
        for (int i = 0; i < n; i++) 
        {
            for (int j = 0; j < n; j++) 
            {
                dist[i][j] = sc.nextInt();
            }
        }

        visited = new boolean[n];
        bestPath = new int[n];
        currentPath = new int[n];
        visited[0] = true;
        currentPath[0] = 0;
        Tsp(0, 1, 0, 0);

        System.out.println("Minimum cost: " + minCost);
        System.out.print("Route: ");
        for (int i = 0; i < n; i++) 
        {
            System.out.print(bestPath[i] + " -> ");
        }
        System.out.println("0");
        sc.close();
   }
}