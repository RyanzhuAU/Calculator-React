import constants from '../config/constants';
import axios from 'axios';

export default function operate(op1, op2, operation) {
    op1 = op1 ? op1 : "0";
    op2 = op2 ? op2 : "0";

    if (operation === "+") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.add + "?op1=" + op1 + "&op2=" + op2)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }
    if (operation === "-") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.subtract + "?op1=" + op1 + "&op2=" + op2)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }
    if (operation === "x") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.multiply + "?op1=" + op1 + "&op2=" + op2)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }

    if (operation === "÷") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.divide + "?op1=" + op1 + "&op2=" + op2)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }

    if (operation === "^") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.power + "?op1=" + op1 + "&op2=" + op2)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }

    if (operation === "√x") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.squareRoot + "?op1=" + op1)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }

    if (operation === "log") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.log + "?op1=" + op1)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }

    if (operation === "ln") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.ln + "?op1=" + op1)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }

    if (operation === "π") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.pi)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }

    if (operation === "e") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.e)
                .then(response => {
                    if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
        });
    }

    throw Error(`Unknown operation '${operation}'`);
}
