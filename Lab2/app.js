const fs = require("fs");
const readMe = fs.readFileSync("file.txt", "utf8")

const mas = readMe.split(" ")

let year = 5

const M1 = mas[0], D1 = mas[1], P1 = mas[2], D2 = mas[3], P2 = mas[4]
const M2 = mas[5], D_1 = mas[6], P_1 = mas[7], D_2 = mas[8], P_2 = mas[9]
const P3 = mas[10], P4 = mas[11], p1 = [12], p2 = mas[13]

console.log(` у випадку А `)

let profit_A = D1 * year - M1

console.log(`За 5 років прибутку = ${profit_A} тисяч.`)

let costs_A = D2 * year
let all_costs_A = Math.abs(costs_A) + M1

console.log(`Збитки за 5 років =  ${costs_A} тисяч.`)
console.log(`Загальна сума  за 5 років = ${all_costs_A-costs_A} `)


console.log(`у випадку Б `)

let profit_B = D_1 * year - M2

console.log(`За 5 років прибутку = ${profit_B} тисяч.`)

let costs_B = D_2 * year;
let all_costs_B = Math.abs(costs_B) + M2

console.log(`Збитки за 5 років = ${costs_B} тисяч.`)
console.log(`Загальна сума  за 5 років = ${all_costs_B - costs_B}`)


let variant_A = profit_A * 100 / M1

let variant_b = profit_B * 100 / M2


function true_varik(a, b) {
    if (a > b) {
        console.log(`Кращий варіант А. `)
    } else if (a < b) {
        console.log(`Кращий варіант Б `)
    } else {
        console.log('Варіанти рівно значні')
    }

}
true_varik(variant_A, variant_b)


year = 4

console.log(`Витратили рік на пошук інформації`)

profit_A = D1 * year - M1
profit_B = D_1 * year - M2

variant_A = profit_A * 100 / M1
variant_b = profit_B * 100 / M2
console.log(`Якщо почекати 4 роки A ${profit_A}`)
console.log(`Якщо почекати 4 роки B ${profit_B}`)
true_varik(profit_A, profit_B)
