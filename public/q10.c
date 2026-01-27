#include <stdio.h>
#include <stdlib.h>

/* Node structure for polynomial */
struct node {
    int coeff;
    int exp;
    struct node *next;
};

/* Function to create a polynomial */
struct node* createPoly(int n) {
    struct node *head = NULL, *temp = NULL, *newNode;
    int i;

    for (i = 0; i < n; i++) {
        newNode = (struct node*)malloc(sizeof(struct node));

        printf("Enter coefficient and exponent: ");
        scanf("%d %d", &newNode->coeff, &newNode->exp);

        newNode->next = NULL;

        if (head == NULL) {
            head = newNode;
            temp = head;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }
    return head;
}

/* Function to add two polynomials */
struct node* addPoly(struct node *p1, struct node *p2) {
    struct node *result = NULL, *temp = NULL, *newNode;

    while (p1 != NULL && p2 != NULL) {
        newNode = (struct node*)malloc(sizeof(struct node));
        newNode->next = NULL;

        if (p1->exp == p2->exp) {
            newNode->coeff = p1->coeff + p2->coeff;
            newNode->exp = p1->exp;
            p1 = p1->next;
            p2 = p2->next;
        } 
        else if (p1->exp > p2->exp) {
            newNode->coeff = p1->coeff;
            newNode->exp = p1->exp;
            p1 = p1->next;
        } 
        else {
            newNode->coeff = p2->coeff;
            newNode->exp = p2->exp;
            p2 = p2->next;
        }

        if (result == NULL) {
            result = newNode;
            temp = result;
        } else {
            temp->next = newNode;
            temp = newNode;
        }
    }

    /* Copy remaining terms */
    while (p1 != NULL) {
        newNode = (struct node*)malloc(sizeof(struct node));
        newNode->coeff = p1->coeff;
        newNode->exp = p1->exp;
        newNode->next = NULL;

        temp->next = newNode;
        temp = newNode;
        p1 = p1->next;
    }

    while (p2 != NULL) {
        newNode = (struct node*)malloc(sizeof(struct node));
        newNode->coeff = p2->coeff;
        newNode->exp = p2->exp;
        newNode->next = NULL;

        temp->next = newNode;
        temp = newNode;
        p2 = p2->next;
    }

    return result;
}

/* Function to display polynomial */
void display(struct node *head) {
    while (head != NULL) {
        printf("%dx^%d", head->coeff, head->exp);
        if (head->next != NULL)
            printf(" + ");
        head = head->next;
    }
    printf("\n");
}

int main() {
    struct node *poly1, *poly2, *result;
    int n1, n2;

    printf("Enter number of terms in first polynomial: ");
    scanf("%d", &n1);
    poly1 = createPoly(n1);

    printf("Enter number of terms in second polynomial: ");
    scanf("%d", &n2);
    poly2 = createPoly(n2);

    printf("\nFirst Polynomial:\n");
    display(poly1);

    printf("Second Polynomial:\n");
    display(poly2);

    result = addPoly(poly1, poly2);

    printf("Resultant Polynomial after Addition:\n");
    display(result);

    return 0;
}
