# -*- coding: utf-8 -*-
"""
Created on Sun Sep  5 23:18:52 2021

@author: ankit

@title: Use of StandardScaler class for standardising the dataset
"""

from pandas import Series
from sklearn.preprocessing import StandardScaler
from math import sqrt

# define contrived series
data = [1.0, 5.5, 9.0, 2.6, 8.8, 3.0, 4.1, 7.9, 6.3]
series = Series(data)
print(series)

# prepare data for normalization
values = series.values
values = values.reshape((len(values), 1))

# train the normalization
scaler = StandardScaler()
scaler = scaler.fit(values)
print(f'Mean: {scaler.mean_}, \
      StandardDeviation: {sqrt(scaler.var_)}')

# normalize the dataset and print
standardized = scaler.transform(values)
print(standardized)
# inverse transform and print
inversed = scaler.inverse_transform(standardized)
print(inversed)