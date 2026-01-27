#include <stdio.h>
#include <stdlib.h>
#define MAX 10

typedef struct { int key; } E;
E h[MAX];

void insert(E x, int *n) {
    int i;
    if (*n == MAX-1) { printf("Full\n"); return; }
    i = ++(*n);
    while (i > 1 && x.key > h[i/2].key) {
        h[i] = h[i/2];
        i /= 2;
    }
    h[i] = x;
}

E del(int *n) {
    int p = 1, c = 2;
    E it, t;

    if (*n == 0) { printf("Empty\n"); it.key = -1; return it; }

    it = h[1];
    t = h[(*n)--];

    while (c <= *n) {
        if (c < *n && h[c].key < h[c+1].key) c++;
        if (t.key >= h[c].key) break;
        h[p] = h[c];
        p = c;
        c *= 2;
    }
    h[p] = t;
    return it;
}

void display(int n) {
    if (!n) { printf("Empty\n"); return; }
    for (int i = 1; i <= n; i++) printf("%d ", h[i].key);
    printf("\n");
}

int main() {
    int ch, n = 0; E x;

    while (1) {
        printf("\n1.Insert 2.Display 3.Delete 4.Exit\n");
        scanf("%d", &ch);
        if (ch == 4) break;

        if (ch == 1) { printf("Value: "); scanf("%d", &x.key); insert(x, &n); }
        else if (ch == 2) display(n);
        else if (ch == 3) {
            x = del(&n);
            if (x.key != -1) printf("Deleted: %d\n", x.key);
        }
    }
}
