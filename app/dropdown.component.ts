import { Component } from "@angular/core";

@Component({
    selector: "my-dropdown",
    styleUrls: [ "../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css" ], // load the button theme
    template: `<h1>DropDown Component</h1>
    `,

})
export class DropdownComponent {
    public listItems: Array<string> = ["Item 1", "Item 2", "Item 3", "Item 4"];
}
