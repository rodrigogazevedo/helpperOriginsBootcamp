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
var functional_1 = require("./functional");
var ManipulationData = /** @class */ (function (_super) {
    __extends(ManipulationData, _super);
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
    ManipulationData.prototype.isNumber = function () {
        return this.verifyListIsNumberFunctional(this._list);
    };
    ManipulationData.prototype.smallest = function () {
        this.result.push({ property: "menor", value: this.verifySmallestNumberFunctional(this._list) });
    };
    ManipulationData.prototype.greatest = function () {
        this.result.push({ property: "maior", value: this.verifyGreatestNumberFunctional(this._list) });
    };
    ManipulationData.prototype.average = function () {
        this.result.push({ property: "média", value: this.verifyAverageNumbersFunctional(this._list) });
    };
    ManipulationData.prototype.print = function () {
        console.log(this.result);
    };
    return ManipulationData;
}(functional_1.Functional));
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
