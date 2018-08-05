import calculate from "./calculate";
import chai from "chai";

chai.config.truncateThreshold = 0;

const expect = chai.expect;

describe('Calculation test', () => {
    it("Should save the input number", function () {
        var state = {
            total: null,
            next: null,
            operation: null
        };

        calculate(state, "4")
            .then(response => {
                expect(response.next).to.equal("4");
            });

        var state = {
            total: null,
            next: "4",
            operation: null
        };

        calculate(state, "4")
            .then(response => {
                expect(response.next).to.equal("44");
            });
    });


    it("Should get '0.' with the input '.'", function () {
        var state = {
            total: null,
            next: null,
            operation: null
        };

        calculate(state, ".")
            .then(response => {
                expect(response.next).to.equal("0.");
            });
    });

    it("Should record the operation.", function () {
        var state = {
            total: null,
            next: "4",
            operation: null
        };

        calculate(state, "+")
            .then(response => {
                expect(response.total).to.equal("4");
                expect(response.next).to.equal(null);
                expect(response.operation).to.equal("+");
            });
    });

    it("Should get the calculation result.", function () {
        var state = {
            total: "5",
            next: "4",
            operation: "x"
        };

        calculate(state, "=")
            .then(response => {
                expect(response.total).to.equal("20");
                expect(response.next).to.equal(null);
                expect(response.operation).to.equal(null);
            });
    });

    it("Should get the add result.", function () {
        var state = {
            total: "5",
            next: "4",
            operation: "+"
        };

        calculate(state, "=")
            .then(response => {
                expect(response.total).to.equal("9");
                expect(response.next).to.equal(null);
                expect(response.operation).to.equal(null);
            });
    });

    it("Should get the subtract result.", function () {
        var state = {
            total: "10",
            next: "2",
            operation: "-"
        };

        calculate(state, "=")
            .then(response => {
                expect(response.total).to.equal("8");
                expect(response.next).to.equal(null);
                expect(response.operation).to.equal(null);
            });
    });

    it("Should get the multiply result.", function () {
        var state = {
            total: "10",
            next: "2",
            operation: "x"
        };

        calculate(state, "=")
            .then(response => {
                expect(response.total).to.equal("20");
                expect(response.next).to.equal(null);
                expect(response.operation).to.equal(null);
            });
    });

    it("Should get the divide result.", function () {
        var state = {
            total: "10",
            next: "2",
            operation: "÷"
        };

        calculate(state, "=")
            .then(response => {
                expect(response.total).to.equal("5");
                expect(response.next).to.equal(null);
                expect(response.operation).to.equal(null);
            });
    });

    it("Should get the power result.", function () {
        var state = {
            total: "10",
            next: "2",
            operation: "^"
        };

        calculate(state, "=")
            .then(response => {
                expect(response.total).to.equal("100");
                expect(response.next).to.equal(null);
                expect(response.operation).to.equal(null);
            });
    });

    it("Should get the square root result.", function () {
        var state = {
            total: "9",
            next: "4",
            operation: "x"
        };

        calculate(state, "√x")
            .then(response => {
                expect(response.total).to.equal("9");
                expect(response.next).to.equal("2");
                expect(response.operation).to.equal("x");
                expect(response.specialOperation).to.equal(true);
            });

        state = {
            total: "9",
            next: null,
            operation: null
        };

        calculate(state, "√x")
            .then(response => {
                expect(response.total).to.equal("9");
                expect(response.next).to.equal("3");
                expect(response.operation).to.equal(null);
                expect(response.specialOperation).to.equal(true);
            });
    });

    it("Should get the log10 result.", function () {
        var state = {
            total: "5",
            next: "10",
            operation: "x"
        };

        calculate(state, "log")
            .then(response => {
                expect(response.total).to.equal("5");
                expect(response.next).to.equal("1");
                expect(response.operation).to.equal("x");
                expect(response.specialOperation).to.equal(true);
            });

        state = {
            total: "100",
            next: null,
            operation: null
        };

        calculate(state, "log")
            .then(response => {
                expect(response.total).to.equal("100");
                expect(response.next).to.equal("2");
                expect(response.operation).to.equal(null);
                expect(response.specialOperation).to.equal(true);
            });
    });

    it("Should get the ln result.", function () {
        var state = {
            total: "5",
            next: "2.718281828459045",
            operation: "x"
        };

        calculate(state, "ln")
            .then(response => {
                expect(response.total).to.equal("5");
                expect(response.next).to.equal("1");
                expect(response.operation).to.equal("x");
                expect(response.specialOperation).to.equal(true);
            });

        state = {
            total: "10",
            next: null,
            operation: null
        };

        calculate(state, "log")
            .then(response => {
                expect(response.total).to.equal("10");
                expect(response.next).to.equal("1");
                expect(response.operation).to.equal(null);
                expect(response.specialOperation).to.equal(true);
            });
    });

    it("Should get the π value.", function () {
        var state = {
            total: null,
            next: null,
            operation: null
        };

        calculate(state, "π")
            .then(response => {
                expect(response.total).to.equal(null);
                expect(response.next).to.equal("3.141592653589793");
                expect(response.operation).to.equal(null);
            });
    });

    it("Should get the e value.", function () {
        var state = {
            total: null,
            next: null,
            operation: null
        };

        calculate(state, "e")
            .then(response => {
                expect(response.total).to.equal(null);
                expect(response.next).to.equal("2.718281828459045");
                expect(response.operation).to.equal(null);
            });
    });
});


