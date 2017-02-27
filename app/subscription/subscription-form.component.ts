import { Component } from "angular2/core";
@Component({
    selector: "subscription",
    templateUrl: "./app/subscription/subscription-form.component.html",
    styleUrls: [
        "./app/subscription/subscription-form.component.css"
    ]
})
export class SubscriptionFormComponent {
    submit(param) {
        console.log(param);
    }
}
