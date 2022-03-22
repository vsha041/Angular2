import {Component} from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}} 2</h1>`
})
export class AppComponent {
    name: string = "Angular";
}
