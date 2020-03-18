
n = int(input())
lst = list(input().split())

for i in range(n):
    if int(lst[i]) % 2 == 0:
        print(lst[i], end=' ')