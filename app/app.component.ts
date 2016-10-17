import { Component } from '@angular/core';
import { ChartsModule } from '@progress/kendo-angular-charts';

@Component({
    selector: 'my-app',
    styleUrls: [ '../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css' ], // load the button theme
    template: `<h1>My First Kendo UI Angular 2 App</h1>
        <nav>
          <a routerLink="/chart" routerLinkActive="active">chart</a>
          <a routerLink="/grid" routerLinkActive="active">grid</a>
        </nav>
        <router-outlet></router-outlet>
    `,

})
export class AppComponent {
   onButtonClick() {
        alert('Hello from Kendo UI!');
    }
}
