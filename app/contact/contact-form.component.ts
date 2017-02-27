import { Component, OnInit } from "angular2/core";

@Component({
    selector: "contact-form",
    templateUrl: "./app/contact/contact-form.component.html",
    styleUrls: [
      "./app/contact/contact-form.component.css"
    ]
})
export class ContactFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    log(param) {
        console.log(param);
    }
}
