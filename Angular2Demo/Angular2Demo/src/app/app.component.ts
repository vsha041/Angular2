import {Component} from "@angular/core"

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    pageHeader: string = "Employee Details";
    imagePath: string = "/wp-content/uploads/2019/02/pargim-logo-1.png";
    isDisabled: boolean = false;
    badHtml: string = "<script>alert('Hacked')</script>";

    firstName: string = 'Tom';
    lastName: string = 'Hopkins';

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
