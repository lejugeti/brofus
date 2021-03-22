export interface ITags {
    types: Array<string>,
    stats: Array<string>
}

export class Tags {
    types: string[] = []
    stats: string[] = []

    constructor(types: string[], stats: string[]){
        this.types = types;
        this.stats = stats;
    }

    
}