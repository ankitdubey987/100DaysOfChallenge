import torch
import torch.nn as nn
import torch.nn.functional as F

class MyModel(nn.Module):

    def __init__(self, input_size, n_nodes, output_size):
        super(MyModel, self).__init__()
        self.operationOne = nn.Linear(input_size, n_nodes)
        self.operationTwo = nn.Linear(n_nodes, output_size)

    def forward(self, x):
        x = self.operationOne(x)
        x = F.relu(x)
        x = self.operationTwo(x)
        x = F.sigmoid(x)
        return x