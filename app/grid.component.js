"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var GridComponent = (function () {
    function GridComponent() {
        this.gridData = [{
                "ProductID": 1,
                "ProductName": "Chai",
                "UnitPrice": 18.0000,
                "Discontinued": true
            }, {
                "ProductID": 2,
                "ProductName": "Chang",
                "UnitPrice": 19.0000,
                "Discontinued": false
            }, {
                "ProductID": 3,
                "ProductName": "Aniseed Syrup",
                "UnitPrice": 10.0000,
                "Discontinued": false
            }, {
                "ProductID": 4,
                "ProductName": "Chef Anton's Cajun Seasoning",
                "UnitPrice": 22.0000,
                "Discontinued": false
            }, {
                "ProductID": 5,
                "ProductName": "Chef Anton's Gumbo Mix",
                "UnitPrice": 21.3500,
                "Discontinued": false
            }, {
                "ProductID": 6,
                "ProductName": "Grandma's Boysenberry Spread",
                "UnitPrice": 25.0000,
                "Discontinued": false
            }];
    }
    GridComponent = __decorate([
        core_1.Component({
            selector: 'my-chart',
            styleUrls: ['../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css'],
            template: "<h1>Grid Component</h1>\n    <kendo-grid [data]=\"gridData\">\n        <kendo-grid-column field=\"ProductID\" title=\"Product ID\" width=\"120\">\n        </kendo-grid-column>\n        <kendo-grid-column field=\"ProductName\" title=\"Product Name\">\n        </kendo-grid-column>\n        <kendo-grid-column field=\"UnitPrice\" title=\"Unit Price\" width=\"230\">\n        </kendo-grid-column>\n        <kendo-grid-column field=\"Discontinued\" width=\"120\">\n            <template kendoCellTemplate let-dataItem>\n                <input type=\"checkbox\" [checked]=\"dataItem.Discontinued\" disabled/>\n            </template>\n        </kendo-grid-column>\n    </kendo-grid>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map