import java.util.*;
public class QuickSort{
    public static void quicksort(int[] arr,int low,int high){
        if(low<high){
            int pivot=partition(arr,low,high);
            quicksort(arr,low,pivot-1);
            quicksort(arr,pivot+1,high);
        }
    }
    public static int partition(int[] arr,int low,int high){
        int pivot=arr[high];
        int i = low-1;
        for(int j=low;j<high;j++){
            if(arr[j]<pivot){
                i++;
                int temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
        int temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;
        return i+1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        int[] arr = new int[n];

        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        quicksort(arr, 0, n - 1);

        System.out.println("Sorted array:");
        for (int num : arr)
            System.out.print(num + " ");

        sc.close();
    }
}
