import { Functional } from "./functional";

class ManipulationData extends Functional {
    private result : {property: string, value: number}[] = [];
    private _list: number[];

    constructor(list:number[]) {
        super();
        this._list = list;
    }

    public set list(list: number[]) {
        this._list = list;
    }
    
    public isNumber(): boolean {
        return this.verifyListIsNumberFunctional(this._list);
    }

    public smallest() {
        this.result.push({property: "menor", value: this.verifySmallestNumberFunctional(this._list)});
    }

    public greatest() {
        this.result.push({property: "maior", value: this.verifyGreatestNumberFunctional(this._list)});
    }

    public average() {
        this.result.push({property: "média", value: this.verifyAverageNumbersFunctional(this._list)});
    }

    public print() {
        console.log(this.result);
    }
}

const numbers : number[] = [31,3,20,6,50,15,8,5,2,10];

const newList = new ManipulationData(numbers);
if (newList.isNumber()) {
    newList.smallest();
    newList.greatest();
    newList.average();
    newList.print();
} else {
    console.log("Lista não é numérica");
}