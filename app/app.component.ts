import { Component } from '@angular/core';
import { ChartsModule } from '@progress/kendo-angular-charts';

@Component({
    selector: 'my-app',
    styleUrls: [ '../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css' ], // load the button theme
    template: `<h1>My First Kendo UI Angular 2 App</h1>
    <button
    kendoButton
    (click)="onButtonClick()"
    [primary]=true>My Kendo UI Button</button>
    <kendo-chart [title]="chartTitle" [series]="chartSeries">
      <kendo-chart-series>
        <kendo-chart-series-item [data]="[5, 3, 2, 1]">
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
    `,

})
export class AppComponent {
   onButtonClick() {
        alert('Hello from Kendo UI!');
    }
}
