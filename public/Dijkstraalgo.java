import java.util.*;

class Edge {
    int target;
    int weight;

    Edge(int target, int weight) {
        this.target = target;
        this.weight = weight;
    }
}

public class Dijkstraalgo{

    public static void dijkstra(List<List<Edge>> graph, int source) {
        int n = graph.size();
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[source] = 0;

        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        pq.add(new int[]{source, 0});

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int node = curr[0];
            int cost = curr[1];

            if (cost > dist[node]) continue;

            for (Edge edge : graph.get(node)) {
                int newDist = dist[node] + edge.weight;
                if (newDist < dist[edge.target]) {
                    dist[edge.target] = newDist;
                    pq.add(new int[]{edge.target, newDist});
                }
            }
        }

        System.out.println("\nShortest distances from source node " + source + ":");
        for (int i = 0; i < n; i++) {
            if (dist[i] == Integer.MAX_VALUE) {
                System.out.println("Node " + i + " is unreachable.");
            } else {
                System.out.println("Distance to node " + i + " = " + dist[i]);
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input instructions
        System.out.print("Enter number of nodes: ");
        int numberOfLocations = sc.nextInt();

        System.out.print("Enter number of edges: ");
        int numberOfEdges = sc.nextInt();

        List<List<Edge>> graph = new ArrayList<>();
        for (int i = 0; i < numberOfLocations; i++) {
            graph.add(new ArrayList<>());
        }

        System.out.println("\nEnter edges in format: from to weight");
        for (int i = 0; i < numberOfEdges; i++) {
            int from = sc.nextInt();
            int to = sc.nextInt();
            int weight = sc.nextInt();
            graph.get(from).add(new Edge(to, weight));
            // For undirected graph, also add: graph.get(to).add(new Edge(from, weight));
        }

        System.out.print("\nEnter source node: ");
        int sourceLocation = sc.nextInt();

        dijkstra(graph, sourceLocation);
    }
}
