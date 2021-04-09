# -*- coding: utf-8 -*-
"""
Created on Thu Apr  8 16:11:49 2021

@author: Antoine
"""

def computeItemWeight(stats, poids):
    
    total = 0
    for stat in stats.index:
        montant = stats[stat]
        if(montant>0):
            total += montant
    
    return total