# bits.py
x=100
print(x.__sizeof__())
print(10.0.__sizeof__())

print('bit operations')
print(22 & 26)
print(22 & 1) # this will print 0 as 22 is divisible by 2
print(23 & 1) # this will print 1 as 23 is odd

print(22 | 26)

print( 22 ^ 26)

print(~29)
print(14 << 2)
x = 282
print([ i for i in range(32) if (x&(1<<i))])