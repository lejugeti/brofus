# -*- coding: utf-8 -*-
"""
Created on Thu Apr  8 16:11:49 2021

@author: Antoine
"""
import matplotlib.pyplot as plt
from sklearn.metrics import mean_absolute_error

def computeItemWeight(stats, poids):
    
    total = 0
    for stat in stats.index:
        montant = stats[stat]
        if(montant>0):
            total += montant
    
    return total


def plotPredictions(model, X, y):
    y_pred = model.predict(X)
    
    fig, ax = plt.subplots()
    ax.plot(range(1,len(y)+1), y, 'o', label="test")
    ax.plot(range(1,len(y)+1), y_pred, 'o', label="pred")
    ax.legend()
    ax.set_xlabel("ytest n°")
    ax.set_ylabel("Nombre de runes")
    fig.suptitle("Modèle régression linéaire")
    plt.show()
    
    print(f"Mean absolute error : {mean_absolute_error(y, y_pred)}")
    print(f"R² : {model.score(X,y)}")

