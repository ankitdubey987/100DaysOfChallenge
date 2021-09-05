# -*- coding: utf-8 -*-
"""
Created on Sun Sep  5 23:29:25 2021

@author: ankit

@title: Prepare Categorical Data
"""


"""
Categorical data is that which contains label values rather
than numeric values. Here each word represents a different 
category.
"""

"""
Ordianl variable is a type of categorical variable in which,
there is a natural ordering of values.
Eg, place:
        it can be first, second, or third.
"""

"""
How to convert categorical data to numerical data?

This involves two steps:
    1. Integer Encoding.
    2. One Hot Encoding.
    
    
Integer Encoding:
    First, each unique category value is assigned an integer
    value. For eg, red is 1, green is 2, and blue is 3.
    This is called label encoding or an integer encoding and
    is easily reversible.
    
One Hot Encoding:
    For categorical variables where no such ordinal relationship
    exists, the integer encoding is not enough. In fact,
    using this encoding and allowing the model to assume a 
    natural ordering between cateogries may result in poor 
    performance or unexpected results (predictions halfway
    between categories).
        In this case, a one hot encoding can be applied to the
        integer representation. This is where the integer en-
        coded variable is reoved and a new binary variable is
        added for each unique integer value. In the color
        vaiable example, there are 3 categories and therefore
        3 binary variables are needed. A 1 value is placed
        in the binary varibale for the color and 0 values for the
        other colors. For example:
            red, green, blue
            1, 0, 0
            0, 1, 0
            0, 0, 1
"""

"""
One Hot Encode with scikit-learn

In this example, we will assume the case where you have an output
sequence of the following 3 labels: cold, warm, hot.
An wxample sequence of 10 time steps may be:
    cold, cold, warm, cold, hot, hot, warm, cold, warm, hot
    
This would first require an integer encoding, such as 1,2,3. 
This would be followed by a one hot encoding of integers to a binary
vector with 3 values, such as [1, 0, 0].

In this example, we will use the encoders from the scikit-learn 
library. Specifically, the LabelEncoder of creating an integer
encoding of labels and the OneHotEncoder for creating a one
hot encoding of integer encoded values. 
The complete example is listed below.
"""

from numpy import array
from numpy import argmax
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OneHotEncoder

# define example
data = ['cold','cold','warm','cold','hot','hot','warm','cold',
        'warm','hot']

values = array(data)
print(values)
# integer encode
label_encoder = LabelEncoder()
integer_encoded = label_encoder.fit_transform(values)
print(integer_encoded)
# binary encode
onehot_encoder = OneHotEncoder(sparse=False)
integer_encoded = integer_encoded.reshape(len(integer_encoded), 1)
onehot_encoded = onehot_encoder.fit_transform(integer_encoded)
print(onehot_encoded)
# invert frist example
inverted = label_encoder.inverse_transform(
    [argmax(onehot_encoded[0, :])])
print(inverted)
