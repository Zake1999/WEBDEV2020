cnt = 0
n = int(input())
lst = list(input().split())

for i in range(n):
    if int(lst[i]) > 0:
        cnt += 1
print(cnt)