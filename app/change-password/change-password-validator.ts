import { Control, ControlGroup } from "angular2/common";

export class ChangePasswordValidator {
    static matchPassword(group: ControlGroup) {
        var newPassword = group.find("newPassword");
        var confirmPassword = group.find("confirmPassword");

        if (newPassword !== confirmPassword)
            return { notMatch: true };

        return null;
    }

    static validateCurrentPassword(control: Control) {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    function() {
                        if (control.value !== "abcde") {
                            resolve({
                                incorrectPassword: true
                            });
                        }
                        else {
                            resolve(null);
                        }
                    }
                    , 1000);
            }
        );
    }
}
