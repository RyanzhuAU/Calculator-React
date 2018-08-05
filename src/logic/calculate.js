import operate from "./operate";

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the current total value
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
    var calculatePromise = new Promise((resolve, reject) => {
        if (buttonName === "AC" || buttonName === "Esc") {
            resolve({
                total: null,
                next: null,
                operation: null
            });
        }

        // if the user click a number button.
        if (buttonName.length === 1 && !isNaN(buttonName)) {
            if (buttonName === "0" && obj.next === "0") {
                resolve({});
            }

            if (obj.specialOperation) {
                resolve({
                    next: buttonName,
                    specialOperation: true
                });
            }

            // If there is an operation, update next
            if (obj.operation) {
                if (obj.next) {
                    resolve({next: obj.next + buttonName});
                }
                resolve({next: buttonName});
            }
            // If there is no operation, update next and clear the value
            if (obj.next) {
                if (obj.next === "0") {
                    resolve({
                        total: null,
                        next: buttonName
                    });
                } else {
                    resolve({
                        total: null,
                        next: obj.next + buttonName
                    });
                }
            }

            resolve({
                total: null,
                next: buttonName
            });
        } else if (buttonName === ".") {
            if (obj.next) {
                // ignore a . if the next number already has one
                if (obj.next.includes(".")) {
                    resolve({});
                }
                resolve({next: obj.next + "."});
            }
            resolve({next: "0."});
        } else if (buttonName === "=" || buttonName === "Enter") {
            if (obj.next && obj.operation) {
                operate(obj.total, obj.next, obj.operation)
                    .then(response => {
                        resolve({
                            total: response,
                            next: null,
                            operation: null
                        })
                    });
            } else {
                // '=' with no operation, nothing to do
                resolve({});
            }
        } else if (buttonName === "π" || buttonName === "e") {
            // handle the special operation.
            operate(null, null, buttonName)
                .then(response => {
                    resolve({
                        total: obj.total,
                        next: response,
                        operation: obj.operation,
                        specialOperation: true
                    })
                });
        } else if (buttonName === "√x" || buttonName === "log" || buttonName === "ln") {
            var op1 = obj.next ? obj.next : obj.total;

            operate(op1, null, buttonName)
                .then(response => {
                    resolve({
                        total: obj.total,
                        next: response,
                        operation: obj.operation,
                        specialOperation: true
                    })
                });
        } else if (obj.operation) {
            // Button must be an operation
            // User pressed an operation button and there is an existing operation
            if (obj.total && obj.next) {
                operate(obj.total, obj.next, obj.operation)
                    .then(response => {
                        resolve({
                            total: response,
                            next: null,
                            operation: buttonName
                        })
                    });
            } else if (obj.total) {
                resolve({
                    total: obj.total,
                    next: null,
                    operation: buttonName
                })
            } else if (obj.next) {
                reject("Error occur during the calculation, please restart the calculation.");
            }
        } else {
            // save the operation and shift 'next' into 'total'
            resolve({
                total: obj.total ? obj.total : obj.next,
                next: null,
                operation: buttonName
            });
        }
    });

    return calculatePromise;

}
