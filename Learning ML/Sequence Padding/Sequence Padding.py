# -*- coding: utf-8 -*-
"""
Created on Mon Sep  6 00:03:51 2021

@author: ankit

@title: Sequence Padding
"""

from tensorflow.keras.preprocessing.sequence import pad_sequences

# define sequences
sequences = [
    [1, 2, 3, 4],
    [1, 2, 3],
    [1],
    ]

# pad sequences
padded = pad_sequences(sequences)
print(padded)

"""
Post-Sequence Padding

Padding can also be applied to the end of the sequences, which
may be more appropriate for some problem domains. Post-Sequence
padding can be specified by setting the padding argument to post.
"""

padded = pad_sequences(sequences,padding='post')
print(padded)