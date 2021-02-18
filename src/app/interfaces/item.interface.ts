export interface Item{
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
    // dernierBrisage: string,
    // coefficient: number,
    // rentabiliteKamas: number,
    // rentabiliteProportion: number
}