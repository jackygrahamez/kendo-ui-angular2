import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [ChartsModule]);
