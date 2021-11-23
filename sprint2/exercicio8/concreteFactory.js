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
exports.ConcreteFactory = void 0;
var factory_1 = require("./factory");
var concreteInformation_1 = require("./concreteInformation");
var ConcreteFactory = /** @class */ (function (_super) {
    __extends(ConcreteFactory, _super);
    function ConcreteFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Método que usa como assinatura o tipo de produto abstrato, mesmo que o produto concreto seja realmente retornado do método.
     */
    ConcreteFactory.prototype.factoryMethod = function () {
        return new concreteInformation_1.ConcreteInformation();
    };
    return ConcreteFactory;
}(factory_1.Factory));
exports.ConcreteFactory = ConcreteFactory;
