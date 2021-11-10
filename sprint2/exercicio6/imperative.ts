export class Imperative {
    private _list: Person[];

    /**
     * Construtor criado para receber a lista com os dados das pessoas e posterior tratamento
     * @param list Recebe a lista com os dados para análise
     */
    constructor(list:Person[]) {
        this._list = list;
    }

    public get list(): Person[] {
        return this.list;
    }

    public set list(list:Person[]) {
        this._list = list;
    }

    /**
     * Método que encontra a bio de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    findBioImperativa(id: number): void {
        for(var index in this._list) { 
            if (this._list[index].id === id) {
                console.log(this._list[index].bio);
            }
        }
    }

    /**
     * Método que encontra o nome de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    findNameImperativa(id: number): void {
        for(var index in this._list) { 
            if (this._list[index].id === id) {
                console.log(this._list[index].name);
            }
        }
    }

    /**
     * Método que encontra e deleta os dados de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    deleteImperativa(id: number): void {
        let newList : {id: number, name: string, bio: string}[] = [];
        for(var index in this._list) { 
            if (this._list[index].id !== id) {
                newList.push(this._list[index]);
            }
        }
        console.log(newList);
    }


    /**
     * Método que encontra os dados de uma pessoa e altera os dados do nome
     * ou da bio de acordo com o que o usuário queira a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     * @param parameter Recebe qual parametro quer alterar: name ou bio
     * @param value Recebe o novo valor que será alterado
     */
    alterImperativa(id: number, parameter: string, value: string): void {
        for(var index in this._list) { 
            if (this._list[index].id === id) {
                if (parameter === "bio") {
                    this._list[index].bio = value;
                }
                else if (parameter === "name") {
                    this._list[index].name = value;
                }
            }
        }
        console.log(this._list);
    }

}