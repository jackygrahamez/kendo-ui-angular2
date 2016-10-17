import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule }   from "@angular/router";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { GridModule } from "@progress/kendo-angular-grid";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

import { AppComponent }  from "./app.component";
import { GridComponent }  from "./grid.component";
import { ChartComponent }  from "./chart.component";
import { DropdownComponent }  from "./dropdown.component";

@NgModule({
  imports: [
    BrowserModule,
    ButtonsModule,
    GridModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: "", component: ChartComponent },
      { path: "chart", component: ChartComponent },
      { path: "grid", component: GridComponent },
      { path: "dropdown", component: DropdownComponent }
    ])
  ],
  declarations: [ AppComponent, GridComponent, ChartComponent, DropdownComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
