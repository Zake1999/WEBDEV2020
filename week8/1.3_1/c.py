from math import sqrt
a = int(input())
b = int(input())
for i in range(a, b+1):
    n = int(sqrt(i))
    if n**2 == int(i):
        print(i)
