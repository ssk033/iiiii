#include <stdio.h>

void simpleTranspose(int a[50][3], int b[50][3]) {
    int k = 1;
    b[0][0] = a[0][1];
    b[0][1] = a[0][0];
    b[0][2] = a[0][2];

    for(int i = 0; i < a[0][1]; i++)
        for(int j = 1; j <= a[0][2]; j++)
            if(a[j][1] == i) {
                b[k][0] = a[j][1];
                b[k][1] = a[j][0];
                b[k][2] = a[j][2];
                k++;
            }
}

void fastTranspose(int a[50][3], int b[50][3]) {
    int row[50] = {0}, pos[50];

    b[0][0] = a[0][1];
    b[0][1] = a[0][0];
    b[0][2] = a[0][2];

    for(int i = 1; i <= a[0][2]; i++)
        row[a[i][1]]++;

    pos[0] = 1;
    for(int i = 1; i < a[0][1]; i++)
        pos[i] = pos[i-1] + row[i-1];

    for(int i = 1; i <= a[0][2]; i++) {
        int j = pos[a[i][1]]++;
        b[j][0] = a[i][1];
        b[j][1] = a[i][0];
        b[j][2] = a[i][2];
    }
}

void display(int a[50][3]) {
    for(int i = 1; i <= a[0][2]; i++)
        printf("%d %d %d\n", a[i][0], a[i][1], a[i][2]);
}

int main() {
    int a[50][3], b[50][3], c[50][3], n;

    printf("Enter rows, columns, non-zero elements: ");
    scanf("%d%d%d", &a[0][0], &a[0][1], &a[0][2]);

    n = a[0][2];
    printf("Enter row col value:\n");
    for(int i = 1; i <= n; i++)
        scanf("%d%d%d", &a[i][0], &a[i][1], &a[i][2]);

    simpleTranspose(a, b);
    fastTranspose(a, c);

    printf("\nOriginal Matrix:\n");
    display(a);

    printf("\nSimple Transpose:\n");
    display(b);

    printf("\nFast Transpose:\n");
    display(c);

    return 0;
}
