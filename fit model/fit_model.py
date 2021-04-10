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

from functions import *

#%% nettoyage data
dfBrisage = pd.read_csv("brisage.csv")
poids = pd.read_json("poids.json", encoding="utf-8")
cleanBrisage = dfBrisage.drop(axis=1, columns=["type", "Craft", "Kamas"])
cleanBrisage = cleanBrisage.fillna(0)
#print(cleanBrisage)
#print(poids)

statsItems = cleanBrisage.iloc[:, 5:]
weightItem = pd.Series([computeItemWeight(statsItems.loc[i],poids) for i in range(len(statsItems))], name="Poids")
data = pd.concat([cleanBrisage[["nom", "Niveau", "Poids focus", "Coef", "Nb runes"]], weightItem], axis=1)
print(data)

X = data.drop(columns=["nom", "Nb runes"])
y = data["Nb runes"]
testSize = 15
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=testSize)
#%% regression linéaire train_test_split

linearReg = linear_model.LinearRegression()
linearReg.fit(X_train, y_train)
plotPredictions(linearReg, X_test, y_test)

#%% régression lasso

lassoReg = linear_model.Lasso()
lassoReg.fit(X_train, y_train)
plotPredictions(lassoReg, X_test, y_test)
#%% Lasso AIC

lassoRegIC = linear_model.LassoLarsIC()
lassoRegIC.fit(X_train, y_train)
plotPredictions(lassoRegIC, X_test, y_test)
#%% régression linéaire cross_val_score

X = cleanBrisage.drop(columns=["nom", "Nb runes"])
y = cleanBrisage["Nb runes"]

linearReg = linear_model.LinearRegression()

print(cross_val_score(linearReg, X, y, cv=3, scoring="neg_mean_squared_error"))



