# check_binary_number.py

def check_binary_number(number:int)->bool:
    try:
        if int(str(number),2):
            return True
    except ValueError as ve:
        print('Please enter a binary no')
        check_binary_number(int(input('Enter a binary number:')))