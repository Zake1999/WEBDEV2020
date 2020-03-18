a = int(input())
i = 0
while 2**i <= a:
    if a == 2**i:
        print('YES')
        break
    i += 1
else: print('NO')