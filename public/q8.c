#include <stdio.h>
#include <stdlib.h>

struct node {
    int d;
    struct node *next;
} *top = NULL;

void push(int x) {
    struct node *n = malloc(sizeof(struct node));
    n->d = x;
    n->next = top;
    top = n;
}

void pop() {
    if (!top) printf("Stack Empty\n");
    else {
        struct node *t = top;
        printf("Popped: %d\n", t->d);
        top = top->next;
        free(t);
    }
}

void display() {
    struct node *t = top;
    if (!t) printf("Stack Empty\n");
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
        printf("\n1.Push 2.Pop 3.Display 4.Exit\n");
        scanf("%d", &ch);

        if (ch == 1) {
            scanf("%d", &x);
            push(x);
        }
        else if (ch == 2) pop();
        else if (ch == 3) display();
        else if (ch == 4) exit(0);
    }
}
