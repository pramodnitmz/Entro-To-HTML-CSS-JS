#include<stdio.h>
#include<math.h>
#include<stdlib.h>
#include<graphics.h> 
 
// Using macros to convert degree to radian
// and call sin() and cos() as these functions
// take input in radians
#define SIN(x) sin(x * 3.141592653589/180)
#define COS(x) cos(x * 3.141592653589/180)  
 
// To rotate an object
void rotate(float a[][2], int n, int x_pivot, int y_pivot, int angle)
{
    int i = 0;
    while (i < n)
    {
        // Shifting the pivot point to the origin
        // and the given points accordingly
        int x_shifted = a[i][0] - x_pivot;
        int y_shifted = a[i][1] - y_pivot;
 
        // Calculating the rotated point co-ordinates
        // and shifting it back
        a[i][0] = x_pivot + (x_shifted*COS(angle) - y_shifted*SIN(angle));
        a[i][1] = y_pivot + (x_shifted*SIN(angle) + y_shifted*COS(angle));
        printf("(%f, %f) ", a[i][0], a[i][1]);
        i++;
    }
}
 
int main()
{   float a[2][2];
    int size1 = 4;//No. of vertices
    int gd = DETECT, gm;
    initgraph (&gd, &gm, NULL); 

    float points_list1[][2] = {{0,0}, {1,0},{0,1}, {1,1}};     
    rotate(points_list1, size1, 1, 0, 45);
    rectangle(a[0][0, a[0][1], a[1][0], a[1][1]);
    return 0;
}