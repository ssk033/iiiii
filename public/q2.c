#include <stdio.h>
int main() {
    int poly[100][2];   /* Single array to store both polynomials */
    int n1, n2, i, j, k;

    printf("Enter number of terms in first polynomial: ");
    scanf("%d", &n1);

    printf("Enter coefficient and exponent for first polynomial:\n");
    for (i = 0; i < n1; i++) {
        scanf("%d %d", &poly[i][0], &poly[i][1]);
    }

    printf("Enter number of terms in second polynomial: ");
    scanf("%d", &n2);

    printf("Enter coefficient and exponent for second polynomial:\n");
    for (j = 0; j < n2; j++) {
        scanf("%d %d", &poly[n1 + j][0], &poly[n1 + j][1]);
    }
    k = n1 + n2;

    for (i = 0; i < n1; i++) {
        for (j = n1; j < k; j++) {
            if (poly[i][1] == poly[j][1]) {
                poly[i][0] += poly[j][0];
                poly[j][0] = 0;  /* Mark as processed */
            }
        }
    }

    printf("Resultant Polynomial:\n");
    for (i = 0; i < k; i++) {
        if (poly[i][0] != 0) {
            printf("%dx^%d", poly[i][0], poly[i][1]);
            if (i < k - 1)
                printf(" + ");
        }
    }
    return 0;
}