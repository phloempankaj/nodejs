#include<stdio.h>
#include<stdlib.h>

int main(int argc,char *argv[])
{
    int a,b,c;
    if(argc!=3)
    {
        printf("Insufficeint Parameters");
    }
    else
    {
        a=atoi(argv[1]);
        b=atoi(argv[2]);
        c=a+b;
        printf("Sum = %d\n",c);
    }
    return 0;
}