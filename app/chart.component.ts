import { Component } from '@angular/core';
import { ChartsModule } from '@progress/kendo-angular-charts';

@Component({
    selector: 'my-chart',
    styleUrls: [ '../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css' ], // load the button theme
    template: `<h1>Chart Component</h1>
    <kendo-chart [title]="chartTitle" [series]="chartSeries">
      <kendo-chart-series>
        <kendo-chart-series-item [data]="[5, 3, 2, 1]">
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
    `,

})
export class ChartComponent { }
