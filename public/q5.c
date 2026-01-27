#include <stdio.h>
#include <ctype.h>

char s[50];
int top = -1;

void push(char x){ s[++top] = x; }
char pop(){ return s[top--]; }

int pr(char x){
    if(x=='+'||x=='-') return 1;
    if(x=='*'||x=='/') return 2;
    if(x=='^') return 3;
    return 0;
}

int main(){
    char in[50], post[50], x;
    int i=0, k=0;

    scanf("%s", in);

    while(in[i]){
        if(isalnum(in[i])) post[k++] = in[i];
        else if(in[i]=='(') push(in[i]);
        else if(in[i]==')'){
            while((x=pop())!='(') post[k++] = x;
        }
        else{
            while(pr(s[top]) >= pr(in[i])) post[k++] = pop();
            push(in[i]);
        }
        i++;
    }

    while(top!=-1) post[k++] = pop();
    post[k] = '\0';

    printf("%s", post);
}
