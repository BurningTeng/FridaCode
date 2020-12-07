#include<stdio.h>
#include<unistd.h>
static int fn(int n){
    printf("number isvv %d\n",n);
}

int main(int argc, char ** argv){
    int n = 0;
    printf("fn is at %p\n",&fn);
    while(1){
        fn(n++);
        sleep(1);
    }
    return 0;
}
    