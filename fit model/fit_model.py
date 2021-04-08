# -*- coding: utf-8 -*-
"""
Created on Mon Mar 29 10:42:08 2021

@author: Antoine
"""

#%%

cd "C:/Users/Antoine/brofus/fit model"
#cd "C:/Users/aparize/Documents/brofus/fit model"

#%%

import pandas as pd
from sklearn import linear_model
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn.metrics import mean_squared_error
from sklearn.metrics import mean_absolute_error

import matplotlib.pyplot as plt

from "functions.py" import *
#%% nettoyage data
dfBrisage = pd.read_csv("brisage.csv")
poids = pd.read_json("poids.json", encoding="utf-8")
cleanBrisage = dfBrisage.drop(axis=1, columns=["type", "Craft", "Kamas"])
cleanBrisage = cleanBrisage.fillna(0)
#print(cleanBrisage)
#print(poids)

statsItems = cleanBrisage.iloc[:, 5:]


#%% regression linéaire train_test_split

X = cleanBrisage.drop(columns=["nom", "Nb runes"])
y = cleanBrisage["Nb runes"]

testSize = 15
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=testSize)

linearReg = linear_model.LinearRegression()
linearReg.fit(X_train, y_train)
y_pred = linearReg.predict(X_test)

print(mean_absolute_error(y_test, y_pred))

fig, ax = plt.subplots()
ax.plot(range(1,testSize+1), y_test, 'o', label="test")
ax.plot(range(1,testSize+1), y_pred, 'o', label="pred")
ax.legend()
ax.set_xlabel("Essais")
ax.set_ylabel("Nombre de runes")
fig.suptitle("Modèle régression linéaire")
plt.show()


#%% régression linéaire cross_val_score

X = cleanBrisage.drop(columns=["nom", "Nb runes"])
y = cleanBrisage["Nb runes"]

linearReg = linear_model.LinearRegression()

print(cross_val_score(linearReg, X, y, cv=3, scoring="neg_mean_squared_error"))



