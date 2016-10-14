"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var kendo_angular_charts_1 = require('@progress/kendo-angular-charts');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [kendo_angular_charts_1.ChartsModule]);
//# sourceMappingURL=main.js.map