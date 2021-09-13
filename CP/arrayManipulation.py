# arrayManipulation.py
#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter

#
# Complete the 'arrayManipulation' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY queries
#

def arrayManipulation(n, queries):
    # Write your code here
    # arr = [0 for x in range(n)]
    # for lb, ub, val in queries:
    #     for x in range(lb-1,ub):
    #         arr[x]+=val
    # # print(arr)
    # return max(arr)
    c = Counter()
    for a,b,k in queries:
        c[a]  +=k
        c[b+1]-=k
    arrSum = 0
    maxSum = 0
    print(c)
    for i in sorted(c)[:-1]:
        arrSum+= c[i]
        maxSum = max(maxSum,arrSum)
    print(arrSum)
    return maxSum
    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    m = int(first_multiple_input[1])

    queries = []

    for _ in range(m):
        queries.append(list(map(int, input().rstrip().split())))

    result = arrayManipulation(n, queries)

    fptr.write(str(result) + '\n')

    fptr.close()
