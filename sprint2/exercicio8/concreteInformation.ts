export class ConcreteInformation implements IInformation {
    /**
     * Método que busca a bio dentro de uma lista tendo como parametro um valor (index).
     * Retornando a bio encontrada.
     * Caso não encontre, retorna uma string informando que não encontrou.
     * @param index Indice utilizado para encontrar a pessoa dentro da lista
     * @param list Lista contendo todas as pessoas informadas
     */
    public bio(index: number, list: Person[]): string {
        const foundBio = list.filter((person) => person.id === index);
        if (foundBio.length === 0) { 
            return 'Bio não encontrado'; 
        }
        const bio = foundBio.map(function(key) {
            return key.bio;
        })
        return(bio.join(''));
    }

    /**
     * Método que busca o nome dentro de uma lista tendo como parametro um valor (index).
     * Retornando o nome encontrado.
     * Caso não encontre, retorna uma string informando que não encontrou.
     * @param index Indice utilizado para encontrar a pessoa dentro da lista
     * @param list Lista contendo todas as pessoas informadas
     */
    public name(index: number, list: Person[]): string {
        const foundName = list.filter((person) => person.id === index);
        if (foundName.length === 0) {
            return 'Name não encontrado';
        }
        const name = foundName.map(function(key) {
            return key.name;
        })
        return(name.join(''));
    }

    /**
     * Método que busca o inventor dentro de uma lista.
     * Retornando o inventor encontrado.
     * Caso não encontre, retorna uma string informando que não encontrou.
     * Retornando
     * @param index Indice utilizado para encontrar a pessoa dentro da lista
     * @param list Lista contendo todas as pessoas informadas
     */
    public inventor(list: Person[]): string {
        const foundInventor = list.filter((person) => person.inventor === 'Linguagem Ada');
        if (foundInventor.length === 0) {
            return 'Inventor não encontrado';
        }
        const inventor = foundInventor.map(function(key) {
            return key.name;
        })
        return(inventor.join(''));
    }
}