# armstrong.py

def armstrong_check(number:int)->bool:
    '''
    If the sum of the cube of each digit of a number is equal to the 
    number itself.
    i.e, 153 => 1*1*1=1, 5*5*5=125, 3*3*3=27
             => 1+125+27 => 153
             Thus 153 is armstrong number
    '''
    out = 0
    for digit in str(number):
        out+=int(digit)**3
    if out == number:
        return True
    return False