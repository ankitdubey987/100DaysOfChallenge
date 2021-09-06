import torch
import torch.nn as nn

my_tensor = torch.tensor(
    [
        [1,2,3],
        [4,5,6]
    ]
)

print(my_tensor)
print(my_tensor.size())

"""working with random tensors"""

random_tensor = torch.rand(
    [4,2]
)

print(random_tensor)