import pandas
import pandas as pd
import matplotlib.pyplot as plt

x = pd.read_excel(r'C:\Users\Estacio\Desktop\CSV\Mentoria\consumo de luz\Planilha2.xlsx')
plt.pie(x["APARELHO"], labels=x["POTÊNCIA (W)"], autopct="%1.0%%")
plt.show(x)
