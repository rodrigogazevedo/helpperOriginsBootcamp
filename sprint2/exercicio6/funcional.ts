export class Funcional {
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
    findBioFunctional(id: number): void {
        const foundBio = this._list.filter((person) => person.id === id);
        const f = foundBio.map(function(key) {
            return key.bio;
        })
        console.log(f.join(''));
    }

    /**
     * Método que encontra o nome de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    findNameFunctional(id: number): void {
        const foundBio = this._list.filter((person) => person.id === id);
        const f = foundBio.map(function(key) {
            return key.name;
        })
        console.log(f.join(''));
    }

    /**
     * Método que encontra e deleta os dados de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    deleteFunctional(id: number): void {
        const newList : {id: number, name: string, bio: string}[] = this._list.filter((person) => person.id !== id);
        console.log(newList);
    }

    /**
     * Método que encontra os dados de uma pessoa e altera os dados do nome
     * ou da bio de acordo com o que o usuário queira a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     * @param parameter Recebe qual parametro quer alterar: name ou bio
     * @param value Recebe o novo valor que será alterado
     */
    alterFunctional(id: number, parameter: string, value: string): void {
        this._list.map(function (person): void {
            if (person.id === id) {
                if (parameter === 'bio') {
                    person.bio = value;
                }
                else if (parameter === 'name') {
                    person.name = value;
                }
            }
        })
    
        console.log(this._list);
    }

}