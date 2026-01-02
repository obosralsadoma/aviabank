import { BankError } from "./error.js"

export class AviaBank {
    constructor(name, number, pin, balance) {
        this.name = name
        this.number = number
        this.balance = balance
        this.pin = pin
        this.blocked = false
        this.num = number.substring(4, 8)
        console.log(`Created account ${this.name} (${this.number}) with balance $${this.balance}\n`)
    }
    deposit(money) {
        if (!this.blocked) {
            console.log(`Balance before: ${this.balance}`)
            this.balance += money
            console.log(`Deposited: $${money}`)
            console.log(`Balance: $${this.balance}\n`)
        } else {
            throw new BankError("Account is blocked")
        }
    }
    withdraw(money) {
        if (this.balance >= money && !this.blocked) {
            console.log(`Balance before: ${this.balance}`)
            this.balance -= money
            console.log(`Withdrawed: $${money}`)
            console.log(`Balance: $${this.balance}\n`)
        } else if (this.blocked) {
            throw new BankError("Account is blocked")
        }
        else {
            throw new BankError("Not enough money")
        }
    }
    info() {
        if (!this.blocked) {
            console.log(`Name: ${this.name}`)
            console.log(`Number: ${this.number}`)
            console.log(`Balance: $${this.balance}\n`)
        } else {
            console.log("Account is blocked")
        }
    }
    block(pin_code) {
        if (pin_code == this.pin && !this.blocked) {
            this.blocked = true
            console.log(`Account *${this.num} blocked`)
        } else if (this.blocked) {
            console.log("Account is already blocked")
        } else {
            throw new BankError("PIN is incorrect")
        }
    }
}