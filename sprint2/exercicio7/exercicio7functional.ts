import { Functional } from "./functional";

class ManipulationData extends Functional {
    private result : {property: string, value: number}[] = [];
    private _list: number[];

     /**
     * Construtor criado para receber uma lista númerica e posterior tratamento
     * @param list Recebe a lista com os dados para análise
     */
    constructor(list:number[]) {
        super();
        this._list = list;
    }

    public set list(list: number[]) {
        this._list = list;
    }
    
    /**
     * Método que herda o método da classe pai para verifica se a lista é do tipo numérica
     */
    public isNumber(): boolean {
        return this.verifyListIsNumberFunctional(this._list);
    }

    /**
     * Método que herda o método da classe pai para verificar qual valor é o menor dentro uma lista.
     * E depois armazena o valor numa nova lista
     */
    public smallest() {
        this.result.push({property: "menor", value: this.verifySmallestNumberFunctional(this._list)});
    }

    /**
     * Método que herda o método da classe pai para verificar qual valor é o maior dentro uma lista.
     * E depois armazena o valor numa nova lista
     */
    public greatest() {
        this.result.push({property: "maior", value: this.verifyGreatestNumberFunctional(this._list)});
    }

    /**
     * Método que herda o método da classe pai para verificar a média dos valores dentro uma lista.
     * E depois armazena o valor numa nova lista
     */
    public average() {
        this.result.push({property: "média", value: this.verifyAverageNumbersFunctional(this._list)});
    }

    /**
     * Método que imprime a nova lista.
     */
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