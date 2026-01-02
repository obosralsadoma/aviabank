export class BankError extends Error { // BankError
    constructor(...params) {
        super(...params)
        this.name = "BankError"
    }
}