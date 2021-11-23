"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var imperative_1 = require("./imperative");
var ManipulationData = /** @class */ (function (_super) {
    __extends(ManipulationData, _super);
    /**
     * Construtor criado para receber uma lista númerica e posterior tratamento
     * @param list Recebe a lista com os dados para análise
     */
    function ManipulationData(list) {
        var _this = _super.call(this) || this;
        _this.result = [];
        _this._list = list;
        return _this;
    }
    Object.defineProperty(ManipulationData.prototype, "list", {
        set: function (list) {
            this._list = list;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Método que herda o método da classe pai para verifica se a lista é do tipo numérica
     */
    ManipulationData.prototype.isNumber = function () {
        return this.verifyListIsNumberImperativa(this._list);
    };
    /**
     * Método que herda o método da classe pai para verificar qual valor é o menor dentro uma lista.
     * E depois armazena o valor numa nova lista
     */
    ManipulationData.prototype.smallest = function () {
        this.result.push({ property: "menor", value: this.verifySmallestNumberImperativa(this._list) });
    };
    /**
     * Método que herda o método da classe pai para verificar qual valor é o maior dentro uma lista.
     * E depois armazena o valor numa nova lista
     */
    ManipulationData.prototype.greatest = function () {
        this.result.push({ property: "maior", value: this.verifyGreatestNumberImperativa(this._list) });
    };
    /**
     * Método que herda o método da classe pai para verificar a média dos valores dentro uma lista.
     * E depois armazena o valor numa nova lista
     */
    ManipulationData.prototype.average = function () {
        this.result.push({ property: "média", value: this.verifyAverageNumbersImperativa(this._list) });
    };
    /**
     * Método que imprime a nova lista.
     */
    ManipulationData.prototype.print = function () {
        console.log(this.result);
    };
    return ManipulationData;
}(imperative_1.Imperative));
var numbers = [31, 3, 20, 6, 50, 15, 8, 5, 2, 10];
var newList = new ManipulationData(numbers);
if (newList.isNumber()) {
    newList.smallest();
    newList.greatest();
    newList.average();
    newList.print();
}
else {
    console.log("Lista não é numérica");
}
