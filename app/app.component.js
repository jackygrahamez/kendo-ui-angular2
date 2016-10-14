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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onButtonClick = function () {
        alert('Hello from Kendo UI!');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css'],
        template: "<h1>My First Kendo UI Angular 2 App</h1>\n    <button\n    kendoButton\n    (click)=\"onButtonClick()\"\n    [primary]=true>My Kendo UI Button</button>\n    <kendo-chart [title]=\"chartTitle\" [series]=\"chartSeries\">\n      <kendo-chart-series>\n        <kendo-chart-series-item [data]=\"[5, 3, 2, 1]\">\n        </kendo-chart-series-item>\n      </kendo-chart-series>\n    </kendo-chart>\n    ",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map