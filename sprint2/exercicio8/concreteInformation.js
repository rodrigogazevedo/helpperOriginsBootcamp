"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteInformation = void 0;
var ConcreteInformation = /** @class */ (function () {
    function ConcreteInformation() {
    }
    /**
     * Método que busca a bio dentro de uma lista tendo como parametro um valor (index).
     * Retornando a bio encontrada.
     * Caso não encontre, retorna uma string informando que não encontrou.
     * @param index Indice utilizado para encontrar a pessoa dentro da lista
     * @param list Lista contendo todas as pessoas informadas
     */
    ConcreteInformation.prototype.bio = function (index, list) {
        var foundBio = list.filter(function (person) { return person.id === index; });
        if (foundBio.length === 0) {
            return 'Bio não encontrado';
        }
        var bio = foundBio.map(function (key) {
            return key.bio;
        });
        return (bio.join(''));
    };
    /**
     * Método que busca o nome dentro de uma lista tendo como parametro um valor (index).
     * Retornando o nome encontrado.
     * Caso não encontre, retorna uma string informando que não encontrou.
     * @param index Indice utilizado para encontrar a pessoa dentro da lista
     * @param list Lista contendo todas as pessoas informadas
     */
    ConcreteInformation.prototype.name = function (index, list) {
        var foundName = list.filter(function (person) { return person.id === index; });
        if (foundName.length === 0) {
            return 'Name não encontrado';
        }
        var name = foundName.map(function (key) {
            return key.name;
        });
        return (name.join(''));
    };
    /**
     * Método que busca o inventor dentro de uma lista.
     * Retornando o inventor encontrado.
     * Caso não encontre, retorna uma string informando que não encontrou.
     * Retornando
     * @param index Indice utilizado para encontrar a pessoa dentro da lista
     * @param list Lista contendo todas as pessoas informadas
     */
    ConcreteInformation.prototype.inventor = function (list) {
        var foundInventor = list.filter(function (person) { return person.inventor === 'Linguagem Ada'; });
        if (foundInventor.length === 0) {
            return 'Inventor não encontrado';
        }
        var inventor = foundInventor.map(function (key) {
            return key.name;
        });
        return (inventor.join(''));
    };
    return ConcreteInformation;
}());
exports.ConcreteInformation = ConcreteInformation;
