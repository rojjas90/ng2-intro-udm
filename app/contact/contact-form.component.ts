import { Component, OnInit } from "angular2/core";

@Component({
    selector: "contact-form",
    templateUrl: "./app/contact/contact-form.component.html",
})
export class ContactFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    log(param) {
        console.log(param);
    }
}
