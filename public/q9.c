#include <stdio.h>
#include <stdlib.h>

struct node {
    int d;
    struct node *next;
} *front = NULL, *rear = NULL;

void add(int x) {
    struct node *n = malloc(sizeof(struct node));
    n->d = x; n->next = NULL;
    if (!rear) front = rear = n;
    else rear->next = n, rear = n;
}

void del() {
    if (!front) printf("Queue Empty\n");
    else {
        struct node *t = front;
        printf("Deleted: %d\n", t->d);
        front = front->next;
        if (!front) rear = NULL;
        free(t);
    }
}

void display() {
    struct node *t = front;
    if (!t) printf("Queue Empty\n");
    else {
        while (t) {
            printf("%d ", t->d);
            t = t->next;
        }
        printf("\n");
    }
}

int main() {
    int ch, x;
    while (1) {
        printf("\n1.Add 2.Delete 3.Display 4.Exit\n");
        scanf("%d", &ch);

        if (ch == 1) {
            scanf("%d", &x);
            add(x);
        }
        else if (ch == 2) del();
        else if (ch == 3) display();
        else if (ch == 4) exit(0);
    }
}
