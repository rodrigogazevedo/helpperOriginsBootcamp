export abstract class Factory{
    /**
     * Criar a implementação da interface
     */
    public abstract factoryMethod(): IInformation;

    /**
     * Método chama o Factory Method para criar o objeto Informação para usa-lo posteriormente
     * Retorna a bio da pessoa cujo index foi informado.
     * @param index Parâmetro que será usado para buscar a bio solicitada
     * @param list Lista com todas as pessoas declaradas
     */
    public showBio(index: number, list: Person[]): string {
        const infoBio = this.factoryMethod();
        return `Bio: ${infoBio.bio(index, list)}`;
    }

    /**
     * Método chama o Factory Method para criar o objeto Informação para usa-lo posteriormente
     * Retorna o nome da pessoa cujo index foi informado.
     * @param index Parâmetro que será usado para buscar o nome solicitado
     * @param list Lista com todas as pessoas declaradas
     */
    public showName(index: number, list: Person[]): string {
        const infoName = this.factoryMethod();
        return `Name: ${infoName.name(index, list)}`;
    }

    /**
     * Método chama o Factory Method para criar o objeto Informação para usa-lo posteriormente.
     * Retorna o nome do inventor da linguagem Ada.
     * @param list Lista com todas as pessoas declaradas
     */
    public showInventor(list: Person[]): string {
        const infoName = this.factoryMethod();
        return `Inventor da Linguagem Ada: ${infoName.inventor(list)}`;
    }
}