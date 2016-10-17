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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var kendo_angular_charts_1 = require("@progress/kendo-angular-charts");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var app_component_1 = require("./app.component");
var grid_component_1 = require("./grid.component");
var chart_component_1 = require("./chart.component");
var dropdown_component_1 = require("./dropdown.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                kendo_angular_buttons_1.ButtonsModule,
                kendo_angular_grid_1.GridModule,
                kendo_angular_charts_1.ChartsModule,
                router_1.RouterModule.forRoot([
                    { path: "", component: chart_component_1.ChartComponent },
                    { path: "chart", component: chart_component_1.ChartComponent },
                    { path: "grid", component: grid_component_1.GridComponent },
                    { path: "dropdown", component: dropdown_component_1.DropdownComponent }
                ])
            ],
            declarations: [app_component_1.AppComponent, grid_component_1.GridComponent, chart_component_1.ChartComponent, dropdown_component_1.DropdownComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map