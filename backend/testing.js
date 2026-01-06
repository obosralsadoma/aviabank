import { AviaID } from "./account.js";

const test = new AviaID("Tom", "Smith", "Alekseevich", 19, "123qwe", "tomsmith", 348129849321849012834)
console.log(test.name)
console.log(test.surname)
console.log(test.otchestvo)
console.log(test.age)
console.log(test.password)
console.log(test.login)
console.log(test.id)