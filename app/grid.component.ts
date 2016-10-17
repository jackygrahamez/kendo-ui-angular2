import { Component } from '@angular/core';
import { ChartsModule } from '@progress/kendo-angular-charts';

@Component({
    selector: 'my-chart',
    styleUrls: [ '../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css' ], // load the button theme
    template: `<h1>Grid Component</h1>
    <kendo-grid [data]="gridData">
        <kendo-grid-column field="ProductID" title="Product ID" width="120">
        </kendo-grid-column>
        <kendo-grid-column field="ProductName" title="Product Name">
        </kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" width="230">
        </kendo-grid-column>
        <kendo-grid-column field="Discontinued" width="120">
            <template kendoCellTemplate let-dataItem>
                <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
            </template>
        </kendo-grid-column>
    </kendo-grid>
    `,

})
export class GridComponent {
  private gridData: any[] = [{
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
