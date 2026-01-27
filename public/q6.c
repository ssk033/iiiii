#include <stdio.h>
#include <ctype.h>

int stack[50], top = -1;

void push(int x) { stack[++top] = x; }
int pop() { return stack[top--]; }

int main() {
    char postfix[50];
    int i = 0, a, b;

    printf("Enter postfix expression: ");
    scanf("%s", postfix);

    while (postfix[i]) {
        if (isdigit(postfix[i]))
            push(postfix[i] - '0');
        else {
            b = pop();
            a = pop();
            switch (postfix[i]) {
                case '+': push(a + b); break;
                case '-': push(a - b); break;
                case '*': push(a * b); break;
                case '/': push(a / b); break;
            }
        }
        i++;
    }

    printf("Result = %d\n", pop());
    return 0;
}
