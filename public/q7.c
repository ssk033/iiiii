#include <stdio.h>
#include <stdlib.h>

int *cq;
int size;
int front = -1, rear = -1;

void insert(){
    int item;
    if ((rear + 1) % size == front){
        printf("Circular Queue Overflow\n");
        return;
    }

    printf("Enter the element to insert: ");
    scanf("%d", &item);

    if (front == -1){
        front = 0;
        rear = 0;
    }else{
        rear = (rear + 1) % size;
    }
    cq[rear] = item;
    printf("Element inserted successfully\n");
}

void delete(){
    int item;
    if (front == -1){
        printf("Circular Queue Underflow\n");
        return;
    }
    item = cq[front];
    printf("Deleted element: %d\n", item);

    if (front == rear){
        front = -1;
        rear = -1;
    }else{
        front = (front + 1) % size;
    }
}

void display(){
    int i;
    if (front == -1){
        printf("Circular Queue is empty\n");
        return;
    }
    printf("Circular Queue elements are:\n");
    i = front;
    while (i != rear){
        printf("%d ", cq[i]);
        i = (i + 1) % size;
    }
    printf("%d\n", cq[rear]);
}

int main(){
    int choice;

    printf("Enter the size of the Circular Queue: ");
    scanf("%d", &size);

    cq = (int *)malloc(size * sizeof(int));

    if (cq == NULL){
        printf("Memory allocation failed\n");
        return 1;
    }

    while (1){
        printf("\n--- Circular Queue Operations ---\n");
        printf("1. Insert\n");
        printf("2. Delete\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice){
        case 1:
            insert();
            break;

        case 2:
            delete();
            break;

        case 3:
            display();
            break;

        case 4:
            free(cq);
            exit(0);

        default:
            printf("Invalid choice\n");
        }
    }
    return 0;
}
