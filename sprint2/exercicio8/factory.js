"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory() {
    }
    /**
     * Método chama o Factory Method para criar o objeto Informação para usa-lo posteriormente
     * Retorna a bio da pessoa cujo index foi informado.
     * @param index Parâmetro que será usado para buscar a bio solicitada
     * @param list Lista com todas as pessoas declaradas
     */
    Factory.prototype.showBio = function (index, list) {
        var infoBio = this.factoryMethod();
        return "Bio: " + infoBio.bio(index, list);
    };
    /**
     * Método chama o Factory Method para criar o objeto Informação para usa-lo posteriormente
     * Retorna o nome da pessoa cujo index foi informado.
     * @param index Parâmetro que será usado para buscar o nome solicitado
     * @param list Lista com todas as pessoas declaradas
     */
    Factory.prototype.showName = function (index, list) {
        var infoName = this.factoryMethod();
        return "Name: " + infoName.name(index, list);
    };
    /**
     * Método chama o Factory Method para criar o objeto Informação para usa-lo posteriormente.
     * Retorna o nome do inventor da linguagem Ada.
     * @param list Lista com todas as pessoas declaradas
     */
    Factory.prototype.showInventor = function (list) {
        var infoName = this.factoryMethod();
        return "Inventor da Linguagem Ada: " + infoName.inventor(list);
    };
    return Factory;
}());
exports.Factory = Factory;
