import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { AppModule } from "./app.module";
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [ChartsModule]);
