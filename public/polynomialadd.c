#include <stdio.h>

void addPolynomials(int poly[], int degree1, int degree2, int result[]) {
    int maxDegree = degree1 > degree2 ? degree1 : degree2;
    for (int i = 0; i <= maxDegree; i++) {
        int coeff1 = (i <= degree1) ? poly[i] : 0;
        int coeff2 = (i <= degree2) ? poly[degree1 + 1 + i] : 0;
        result[i] = coeff1 + coeff2;
    }
}

void displayPolynomial(int poly[], int degree) {
    for (int i = 0; i <= degree; i++) {
        printf("%d", poly[i]);
        if (i != degree) printf("x^%d + ", degree - i);
    }
    printf("\n");
}

int main() {
    int degree1 = 2, degree2 = 2;
    int poly[10] = {3, 2, 1, 5, 4, 3};
    int result[10] = {0};

    addPolynomials(poly, degree1, degree2, result);

    printf("Polynomial 1: ");
    displayPolynomial(poly, degree1);

    printf("Polynomial 2: ");
    displayPolynomial(poly + degree1 + 1, degree2);

    printf("Resultant Polynomial: ");
    displayPolynomial(result, degree1 > degree2 ? degree1 : degree2);

    return 0;
}

