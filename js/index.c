#include <stdio.h>
void chessBoard(){

  int n;
  int i=0,j=0;
  printf("hemjee: ");
  scanf("%d", &n);
  if(n>0){
    for(int k=0;k<n;k++){
        if((k%2)==0){
    while(i<n){
        if((i % 2) == 1){
            printf("##");
        }else{ 
            printf("__");
            }
      i++;  
    }
    printf("\n");
    i=0;}else{
        while(i<n){
        if((i % 2) == 1){
            printf("__");
        }else{ 
            printf("##");
            }
      i++;  
    }
    printf("\n");
    i=0;
    }
}

  } else {
    printf("hemjee aldaatai baina!");
  }
    return 0;
}
void gurwaljin(){
    printf("gurwaljingin 3 talig ogno uu!\n");
    int a,b,c;
    scanf("%d%d%d",&a,&b,&c);
    int p = a+b+c;
    printf("Perimeter n: %d",p);
    return 0;
}
void tsoonKvadrat(){
    int a,b,uld;
    printf("2 taliin hemjee!\n");
    scanf("%d%d",&a,&b);
    if(a>b){
int d=a/b;
printf("%d:%d\n",b,d);
a=a%b;
int bagt=b/a;
printf("%d:%d\n",a,bagt);
uld=b%a;
printf("%d:%d\n",uld,a);
    }
return 0;    
}
int main() {
   int index=0;
   printf("1 darsnaar chess board hewlene!\n");
   printf("2 darsnaar gurwaljin Perimeter hewlene!\n");
      printf("3 darsnaar tsoon kvadrat hewlene!\n");

scanf("%d",&index);
switch (index)
{
    case 1:
chessBoard();
    break;
case 2:
gurwaljin();
break;
case 3:
tsoonKvadrat();
break;
default:
printf("iim utga bhgu bn");
    break;
}
    return 0;
}