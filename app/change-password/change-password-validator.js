System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChangePasswordValidator;
    return {
        setters: [],
        execute: function () {
            ChangePasswordValidator = (function () {
                function ChangePasswordValidator() {
                }
                ChangePasswordValidator.matchPassword = function (group) {
                    var newPassword = group.find("newPassword");
                    var confirmPassword = group.find("confirmPassword");
                    if (newPassword !== confirmPassword)
                        return { notMatch: true };
                    return null;
                };
                ChangePasswordValidator.validateCurrentPassword = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value !== "abcde") {
                                resolve({
                                    incorrectPassword: true
                                });
                            }
                            else {
                                resolve(null);
                            }
                        }, 1000);
                    });
                };
                return ChangePasswordValidator;
            }());
            exports_1("ChangePasswordValidator", ChangePasswordValidator);
        }
    };
});
//# sourceMappingURL=change-password-validator.js.map