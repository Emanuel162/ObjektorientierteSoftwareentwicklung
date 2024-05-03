#include <stdbool.h>
#include<stdio.h>

//a > b = 1
//a = b = 0
//b > a = -1
int sortAsc(int a, int b) {
    return a > b ? 1 : (a < b ? -1 : 0);
}

int sortDesc(int a, int b) {
    return a > b ? -1 : (a < b ? 1 : 0);
}

//a even and b uneven -> 1
//a uneven and b even -> -1
//else(both, a und b, even or uneven) -> 0
int sortEven(int a, int b) {
    return (a % 2 == 0) && (b % 2 != 0) ? 1 : ((a % 2 != 0) && (b % 2 == 0) ? -1 : 0);
}

void printArray(int array[], int size) {
    printf("[ ");
    for (int i = 0; i < size; i++) {
        printf("%d ", array[i]);
    }
    printf("]\n");
}

void sort(int array[], int size, int (*sortingFunction)(int, int)) {
    bool isSorted = false;
    while (!isSorted) {
        int isSortedCounter = 0;
        for (int i = 0; i < size - 1; i++) {
            if (sortingFunction(array[i], array[i + 1]) < 0) {
                isSortedCounter++;
                int temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        if (isSortedCounter == 0) {
            isSorted = true;
        }
    }
}

int main(int argc, char **argv) {
    int array[] = {4, 2, 6, 9, 1, 2, 0, 5, 5, 8};
    printArray(array, 10);

    sort(array, 10, sortAsc);
    printArray(array, 10);

    sort(array, 10, sortDesc);
    printArray(array, 10);

    sort(array, 10, sortEven);
    printArray(array, 10);


    return 0;
}
