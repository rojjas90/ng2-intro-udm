import { Component } from "angular2/core";
import { ControlGroup, FormBuilder, Validators  }  from "angular2/common";

import { ChangePasswordValidator } from "./change-password-validator";

@Component({
    selector: "change-password",
    templateUrl: "./app/change-password/change-password.component.html"
})
export class ChangePasswordComponent {

    form: ControlGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            currentPassword: [
                "",
                Validators.required,
                ChangePasswordValidator.validateCurrentPassword
            ],
            newPassword: [
                "",
                Validators.compose([
                    Validators.required,
                    Validators.minLength(5)
                    // ,
                    // ChangePasswordValidator.matchPassword
                ])
            ],
            confirmPassword: [
                "",
                Validators.compose([
                    Validators.required
                    ,
                    ChangePasswordValidator.matchPassword
                ])
            ]
        }
            // ,
            // ChangePasswordValidator.matchPassword
        );
    }

    submit() {
        console.log(this.form.value);
    }
}
