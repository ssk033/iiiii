#include <stdio.h>
#include <string.h>

void computeLPS(char *p, int lps[]) {
    int i = 1, j = 0, m = strlen(p);
    lps[0] = 0;
    while (i < m) {
        if (p[i] == p[j]) lps[i++] = ++j;
        else if (j) j = lps[j - 1];
        else lps[i++] = 0;
    }
}

void KMP(char *t, char *p) {
    int n = strlen(t), m = strlen(p), lps[50];
    computeLPS(p, lps);
    int i = 0, j = 0;
    while (i < n) {
        if (t[i] == p[j]) i++, j++;
        if (j == m) {
            printf("KMP Match at index %d\n", i - j);
            j = lps[j - 1];
        } else if (i < n && t[i] != p[j])
            j ? (j = lps[j - 1]) : i++;
    }
}


int main() {
    char text[100], pat[50];

    printf("Enter text: ");
    scanf("%s", text);
    printf("Enter pattern: ");
    scanf("%s", pat);

    printf("\nKMP Matching:\n");
    KMP(text, pat);

    return 0;
}
