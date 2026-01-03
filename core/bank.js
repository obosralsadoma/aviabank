function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class BankAccount {
    constructor(pin) {
        this.number = getRandomInt(10243719, 99999999)
        this.pin = pin
        this.abbrnum = "**" + String(this.number).slice(4, 8)
        this.blocked
    }
}

const bacc = new BankAccount(0)
console.log(bacc.number)
console.log(bacc.abbrnum)