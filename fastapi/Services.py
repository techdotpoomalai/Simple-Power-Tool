import pandas as pd

class Service(object):
  
  def __init__(self, path):
    self.path = path

  def load(self):
    df=pd.read_csv(self.path)
    print(df)
