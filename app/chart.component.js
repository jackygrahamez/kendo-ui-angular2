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
var ChartComponent = (function () {
    function ChartComponent() {
    }
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'my-chart',
            styleUrls: ['../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css'],
            template: "<h1>Chart Component</h1>\n    <kendo-chart [title]=\"chartTitle\" [series]=\"chartSeries\">\n      <kendo-chart-series>\n        <kendo-chart-series-item [data]=\"[5, 3, 2, 1]\">\n        </kendo-chart-series-item>\n      </kendo-chart-series>\n    </kendo-chart>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map