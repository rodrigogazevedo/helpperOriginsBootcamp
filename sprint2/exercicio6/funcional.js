"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcional = void 0;
var Funcional = /** @class */ (function () {
    /**
     * Construtor criado para receber a lista com os dados das pessoas e posterior tratamento
     * @param list Recebe a lista com os dados para análise
     */
    function Funcional(list) {
        this._list = list;
    }
    Object.defineProperty(Funcional.prototype, "list", {
        get: function () {
            return this.list;
        },
        set: function (list) {
            this._list = list;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Método que encontra a bio de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    Funcional.prototype.findBioFunctional = function (id) {
        var foundBio = this._list.filter(function (person) { return person.id === id; });
        var bio = foundBio.map(function (key) {
            return key.bio;
        });
        console.log(bio.join(''));
    };
    /**
     * Método que encontra o nome de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    Funcional.prototype.findNameFunctional = function (id) {
        var foundName = this._list.filter(function (person) { return person.id === id; });
        var name = foundName.map(function (key) {
            return key.name;
        });
        console.log(name.join(''));
    };
    /**
     * Método que encontra e deleta os dados de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    Funcional.prototype.deleteFunctional = function (id) {
        var newList = this._list.filter(function (person) { return person.id !== id; });
        console.log(newList);
    };
    /**
     * Método que encontra os dados de uma pessoa e altera os dados do nome
     * ou da bio de acordo com o que o usuário queira a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     * @param parameter Recebe qual parametro quer alterar: name ou bio
     * @param value Recebe o novo valor que será alterado
     */
    Funcional.prototype.alterFunctional = function (id, parameter, value) {
        this._list.map(function (person) {
            if (person.id === id) {
                if (parameter === 'bio') {
                    person.bio = value;
                }
                else if (parameter === 'name') {
                    person.name = value;
                }
            }
        });
        console.log(this._list);
    };
    return Funcional;
}());
exports.Funcional = Funcional;
