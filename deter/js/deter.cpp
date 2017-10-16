#include<iostream>
#include<cmath>

using namespace std;

int main()
{

double v1, v2, tot = 0.0, temp[2][2];

cout << "Enter the Values for matrix going from row to col with a space in-between!" << endl;
cin >> temp[0][0] >> temp[0][1] >> temp[1][0] >> temp[1][1];

cout << "Values v1, v2, tot:" << v1 << " " << v2 << " " << tot << " " << endl;

v1 = ((temp[0][0]) * (temp[1][1]));
v2 = ((temp[1][0]) * (temp[0][1]));
tot = ((v1) - (v2));

cout << "Values v1, v2, tot:" << v1 << " " << v2 << " " << tot << " " << endl;
cout << "Determinant of 2x2 Matrix:" << tot << endl;

return 0;
}
