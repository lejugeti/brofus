import { IObject } from './object.interface'

export interface DofapiItem{
    _id: number,
    ankamaId: number,
    name: string,
    level: number,
    type: string,
    imgUrl: string,
    url: string,
    description: string,
    statistics: Array<object>,
    conditions: string[],
    recipe: object[],
    setId: number
    
}

export interface Item{
    id: number,
    ankamaId: number,
    name: string,
    level: number,
    type: string,
    imgUrl: string,
    statistics: Array<IObject>,
    
}