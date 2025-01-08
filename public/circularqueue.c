#include <stdio.h>
#include <stdlib.h>

#define MALLOC(x, size, type) 
typedef struct {
    int n;
} element;

int front = 0, rear = 0, capacity;
element *queue;

void copy(element *start, element *end, element *newQueue);
void queueFull();
void addq(element item);
element deleteq();
void displayq();

void copy(element *start, element *end, element *newQueue) {
    while (start < end) {
        *newQueue = *start;
        start++;
        newQueue++;
    }
}

void queueFull() {
    element *newQueue;
    MALLOC(newQueue, capacity * 2, element);

    int start = (front + 1) % capacity;

    if (start < 2) {
        copy(queue + start, queue + start + capacity - 1, newQueue);
    } else {
        copy(queue + start, queue + capacity, newQueue);
        copy(queue, queue + rear + 1, newQueue + capacity - start);
    }

    front = 2 * capacity - 1;
    rear = capacity - 1;
    capacity *= 2;

    free(queue);
    queue = newQueue;
}

void addq(element item) {
    rear = (rear + 1) % capacity;

    if (front == rear) {
        queueFull();
    }

    queue[rear] = item;
}

element deleteq() {
    element item;

    if (front == rear) {
        item.n = -1; // Indicates the queue is empty
        return item;
    }

    front = (front + 1) % capacity;
    item = queue[front];
    return item;
}

void displayq() {
    if (front == rear) {
        printf("Queue is empty\n");
        return;
    }

    int i = (front + 1) % capacity;
    while (i != rear) {
        printf("%d\t", queue[i].n);
        i = (i + 1) % capacity;
    }
    printf("%d\n", queue[i].n);
}

int main() {
    int choice;
    element item;

    printf("Enter the initial queue size: ");
    scanf("%d", &capacity);

    if (capacity <= 0) {
        printf("Invalid queue size. Exiting...\n");
        return 1;
    }

    MALLOC(queue, capacity, element);

    while (1) {
        printf("\nMenu:\n");
        printf("1. Add\n");
        printf("2. Delete\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter an integer to add: ");
                scanf("%d", &item.n);
                addq(item);
                break;

            case 2:
                item = deleteq();
                if (item.n == -1) {
                    printf("Queue is empty. Nothing to delete.\n");
                } else {
                    printf("Deleted item: %d\n", item.n);
                }
                break;

            case 3:
                displayq();
                break;

            case 4:
                free(queue);
                printf("Exiting program. Goodbye!\n");
                return 0;

            default:
                printf("Invalid choice. Please try again.\n");
        }
    }

    return 0;
}
