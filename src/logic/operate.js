import constants from '../config/constants';
import axios from 'axios';

export default function operate(op1, op2, operation) {
    const httpAdapter = require('axios/lib/adapters/http');

    op1 = op1 ? op1 : "0";
    op2 = op2 ? op2 : "0";

    if (operation === "+") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.add + "?op1=" + op1 + "&op2=" + op2, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }
    if (operation === "-") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.subtract + "?op1=" + op1 + "&op2=" + op2, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }
    if (operation === "x" || operation === "*") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.multiply + "?op1=" + op1 + "&op2=" + op2, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }

    if (operation === "÷" || operation === "/") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.divide + "?op1=" + op1 + "&op2=" + op2, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }

    if (operation === "^") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.power + "?op1=" + op1 + "&op2=" + op2, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }

    if (operation === "√x") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.squareRoot + "?op1=" + op1, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }

    if (operation === "log") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.log + "?op1=" + op1, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }

    if (operation === "ln") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.ln + "?op1=" + op1, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }

    if (operation === "π") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.pi, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }

    if (operation === "e") {
        return new Promise((resolve, reject) => {
            axios.get(constants.serverUrl + constants.operation.e, {
                    adapter: httpAdapter
                })
                .then(response => {
                    if (response.data === "{ \"result\": NaN }\n"){
                        //TODO error toast here
                        alert("Invalid input.");
                    } else if (response != null && response.data != null) {
                        resolve(response.data.result.toString());
                    } else {
                        resolve(0);
                    }
                })
                .catch(error => {
                    reject(error.message);
                })
        });
    }

    //TODO: need the toast service to show the error
    console.alert(`Unknown operation '${operation}'`);
}
