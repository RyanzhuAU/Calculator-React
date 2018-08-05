import operate from "./operate";
import chai from "chai";

chai.config.truncateThreshold = 0;

const expect = chai.expect;

describe('operation promise test', () => {
    it("Should get the add result.", function () {
        operate("5", "4", "+")
            .then(response => {
                expect(response).to.equal("9");
            });
    });

    it("Should get the subtract result.", function () {
        operate("5", "4", "-")
            .then(response => {
                expect(response).to.equal("1");
            });

    });

    it("Should get the multiply result.", function () {
        operate("5", "4", "x")
            .then(response => {
                expect(response).to.equal("20");
            });
    });

    it("Should get the divide result.", function () {
        operate("10", "4", "÷")
            .then(response => {
                expect(response).to.equal("2.5");
            });
    });

    it("Should get the power result.", function () {
        operate("10", "2", "^")
            .then(response => {
                expect(response).to.equal("100");
            });
    });

    it("Should get the square root result.", function () {
        operate("4", null, "√x")
            .then(response => {
                expect(response).to.equal("2");
            });
    });

    it("Should get the log10 result.", function () {
        operate("10", null, "log")
            .then(response => {
                expect(response).to.equal("1");
            });
    });

    it("Should get the ln result.", function () {
        operate("2.718281828459045", null, "ln")
            .then(response => {
                expect(response).to.equal("1");
            });
    });

    it("Should get the π value.", function () {
        operate(null, null, "π")
            .then(response => {
                expect(response).to.equal("3.141592653589793");
            });
    });

    it("Should get the e value.", function () {
        operate(null, null, "e")
            .then(response => {
                expect(response).to.equal("2.718281828459045");
            });
    });
}
