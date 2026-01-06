import { BankAccount } from "./bank.js";

export class AviaID extends BankAccount {
    constructor(name, surname, otchestvo, age, password, login, id) {
        this.name = name
        this.surname = surname
        this.otchestvo = otchestvo
        this.age = age
        this.password = password
        this.login = login
        this.id = id
    }
}