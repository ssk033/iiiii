#include <stdio.h>

int g[10][10], v[10], n;

void create() {
    printf("Vertices: ");
    scanf("%d", &n);
    printf("Adjacency matrix:\n");
    for (int i=0;i<n;i++)
        for (int j=0;j<n;j++)
            scanf("%d",&g[i][j]);
}

void DFS(int s) {
    printf("%d ", s);
    v[s]=1;
    for(int i=0;i<n;i++)
        if(g[s][i] && !v[i]) DFS(i);
}

void BFS(int s) {
    int q[10], f=0, r=-1;
    for(int i=0;i<n;i++) v[i]=0;
    q[++r]=s; v[s]=1;

    while(f<=r){
        s=q[f++]; printf("%d ",s);
        for(int i=0;i<n;i++)
            if(g[s][i] && !v[i]){
                q[++r]=i; v[i]=1;
            }
    }
}

int main() {
    int ch,s;
    while(1){
        printf("\n1.Create 2.DFS 3.BFS 4.Exit\n");
        scanf("%d",&ch);
        if(ch==4) break;
        if(ch==1) create();
        else{
            printf("Start: ");
            scanf("%d",&s);
            for(int i=0;i<n;i++) v[i]=0;
            if(ch==2) DFS(s);
            else if(ch==3) BFS(s);
        }
    }
}
