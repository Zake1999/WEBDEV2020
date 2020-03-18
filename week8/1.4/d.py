cnt = 0
n = int(input())
lst = list(input().split())

for i in range(n-1):
    if int(lst[i+1]) > int(lst[i]):
        cnt += 1
print(cnt)
