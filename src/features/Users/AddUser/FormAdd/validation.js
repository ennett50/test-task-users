/**
 * @name Validation
 * @returns {{checkField: (function(*, *=): string), checkDataForm: (function(*): {isValid: boolean, errorFields: Array})}}
 * @constructor
 */
function Validation() {
    /**
     * @name checkField
     * @param {String} name
     * @param {String} value
     * @returns {string} - Error message if it exist
     */
    function checkField(name, value) {
        let message;
        if (value === "") {
            message = "Empty field";
        } else {
            switch (name) {
                case "login":
                    if (!value.match(/^[a-z0-9_-]*$/)) {
                        message =
                            "Enter a valid login. Only numbers and letters, _ and -";
                    }
                    break;
                case "password":
                    if (!value.match(/^.{6,}$/)) {
                        message = "Enter a valid password. Min 6 letters";
                    }
                    break;
                case "firstName":
                    if (!value.match(/[a-zA-Zа-яА-ЯёЁ]{3,15}/)) {
                        message =
                            "Enter a valid password. Min - 3, max - 15 characters";
                    }
                    break;
                case "lastName":
                    if (!value.match(/[a-zA-Zа-яА-ЯёЁ]{3,25}/)) {
                        message =
                            "Enter a valid password. Min - 3, max - 25 characters";
                    }
                    break;
                case "age":
                    if (
                        !(value.match(/^\d{2}$/) && value >= 18 && value <= 65)
                    ) {
                        message =
                            "Enter a valid password. Min - 18, max - 65 years";
                    }
                    break;
                case "role":
                    if (!value.match(/^[1-4]$/)) {
                        message = "Empty field or error's filling";
                    }
                    break;
                case "isActive":
                    if (typeof value === "boolean") {
                        message = "Only boolean types";
                    }
                    break;
                default:
                    message = "";
            }
        }
        return message;
    }

    /**
     * @name checkDataForm
     * @param {IterableIterator} data
     * @returns {{isValid: boolean, errorFields: Array}}
     */
    function checkDataForm(data) {
        const errorFields = [];
        for (const item of data) {
            const error = checkField(item[0], item[1]);
            if (error) {
                errorFields.push({
                    name: item[0],
                    error
                });
            }
        }
        return {
            isValid: !errorFields.length,
            errorFields
        };
    }
    return {
        checkField,
        checkDataForm
    };
}

export default Validation;
