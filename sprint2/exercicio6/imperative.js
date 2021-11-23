"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imperative = void 0;
var Imperative = /** @class */ (function () {
    /**
     * Construtor criado para receber a lista com os dados das pessoas e posterior tratamento
     * @param list Recebe a lista com os dados para análise
     */
    function Imperative(list) {
        this._list = list;
    }
    Object.defineProperty(Imperative.prototype, "list", {
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
    Imperative.prototype.findBioImperativa = function (id) {
        for (var index in this._list) {
            if (this._list[index].id === id) {
                console.log(this._list[index].bio);
            }
        }
    };
    /**
     * Método que encontra o nome de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    Imperative.prototype.findNameImperativa = function (id) {
        for (var index in this._list) {
            if (this._list[index].id === id) {
                console.log(this._list[index].name);
            }
        }
    };
    /**
     * Método que encontra e deleta os dados de uma pessoa a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     */
    Imperative.prototype.deleteImperativa = function (id) {
        var newList = [];
        for (var index in this._list) {
            if (this._list[index].id !== id) {
                newList.push(this._list[index]);
            }
        }
        console.log(newList);
    };
    /**
     * Método que encontra os dados de uma pessoa e altera os dados do nome
     * ou da bio de acordo com o que o usuário queira a partir de um id informado
     * @param id Recebe o id para encontrar a pessoa na lista
     * @param parameter Recebe qual parametro quer alterar: name ou bio
     * @param value Recebe o novo valor que será alterado
     */
    Imperative.prototype.alterImperativa = function (id, parameter, value) {
        for (var index in this._list) {
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
    };
    return Imperative;
}());
exports.Imperative = Imperative;
