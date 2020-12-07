#include<stdio.h>
#include "./hello_struct.h"
#include<unistd.h>

int add(int c){
    return c+1;
}
int main(){
    //foo c = {1,2};
    int c = 1;
    int result = add(c);
    // while(1)
    // {
    //     c.a = result;
    //     result = add(c);
    //     printf("%d\n", result);
    //     sleep(1);
    // }
    return 0;
}
