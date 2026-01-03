function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class BankAccount {
    constructor(pin) {
        this.number = getRandomInt(10243719, 99999999)
        this.pin = pin
        this.datecreated = new Date()
        this.abbrdc = `${this.datecreated.getDate}/${this.datecreated.getMonth + 1}/${this.datecreated.getFullYear}`
        this.dateendsup = new Date()
        this.dateendsup.setFullYear += 3
        this.abbrnum = "**" + String(this.number).slice(4, 8)
        this.blocked = false
        this.bankname = "aviabank"
        this.balance = 0
        console.log("Создан банковский аккаунт.")
    }
}