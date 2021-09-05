# -*- coding: utf-8 -*-
"""
Created on Sun Sep  5 23:04:50 2021

@author: ankit

Title: Normalizing the data and then inverse normalizing it
"""


from pandas import Series
from sklearn.preprocessing import MinMaxScaler

# define contrieved series
data = [10.0,20.0,30.0,40.0,50.0,60.0,70.0,80.0,90.0,100.0]

series = Series(data)
print(series)

# prepare data for normalization
values = series.values
values = values.reshape((len(values), 1))

# train the normalization
scaler = MinMaxScaler(feature_range=(0, 1))
scaler = scaler.fit(values)
print(f'Min: {scaler.data_min_}, Max: {scaler.data_max_}')

# normalize the dataset and print
normalized = scaler.transform(values)
print(normalized)

# inverse transform and print
inversed = scaler.inverse_transform(normalized)
print(inversed)