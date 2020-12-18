const fs = require("fs");
const readline = require("readline");
const readMe = fs.readFileSync("name.txt", "utf8");
const readMe2 = fs.readFileSync("parameters.txt", "utf8");
const Exp1 = fs.readFileSync("exp1.txt", "utf8");
const Exp2 = fs.readFileSync("exp2.txt", "utf8");
const Exp3 = fs.readFileSync("exp3.txt", "utf8");
const Exp4 = fs.readFileSync("exp4.txt", "utf8");
const arr_Gelicopter = readMe.split(" "); // розбиваю в масив по пробілу
const arrParam = readMe2.split(" "); // розбиваю в масив по пробілу
const exp1 = Exp1.split(" ");
const exp2 = Exp2.split(" ");
const exp3 = Exp3.split(" ");
const exp4 = Exp4.split(" ");


console.log("Список вертолоьотів:");
console.log(arr_Gelicopter);
console.log("Параметри:");
console.log(arrParam);


let Boing_Sikorski = {
    Mass: Number.parseFloat(exp1[0]) + Number.parseFloat(exp2[0]) + Number.parseFloat(exp3[0]) + Number.parseFloat(exp4[0]),
    MaxSpeed: Number.parseFloat(exp1[1]) + Number.parseFloat(exp2[1]) + Number.parseFloat(exp3[1]) + Number.parseFloat(exp4[1]),
    Weapon: Number.parseFloat(exp1[2]) + Number.parseFloat(exp2[2]) + Number.parseFloat(exp3[2]) + Number.parseFloat(exp4[2]),
    Faraway: Number.parseFloat(exp1[3]) + Number.parseFloat(exp2[3]) + Number.parseFloat(exp3[3]) + Number.parseFloat(exp4[3])
}

let Bell206 = {
    Mass: Number.parseFloat(exp1[4]) + Number.parseFloat(exp2[4]) + Number.parseFloat(exp3[4]) + Number.parseFloat(exp4[4]),
    MaxSpeed: Number.parseFloat(exp1[5]) + Number.parseFloat(exp2[5]) + Number.parseFloat(exp3[5]) + Number.parseFloat(exp4[5]),
    Weapon: Number.parseFloat(exp1[6]) + Number.parseFloat(exp2[6]) + Number.parseFloat(exp3[6]) + Number.parseFloat(exp4[6]),
    Faraway: Number.parseFloat(exp1[7]) + Number.parseFloat(exp2[7]) + Number.parseFloat(exp3[7]) + Number.parseFloat(exp4[7])

}

let AgustaAW109 = {
    Mass: Number.parseFloat(exp1[8]) + Number.parseFloat(exp2[8]) + Number.parseFloat(exp3[8]) + Number.parseFloat(exp4[8]),
    MaxSpeed: Number.parseFloat(exp1[9]) + Number.parseFloat(exp2[9]) + Number.parseFloat(exp3[9]) + Number.parseFloat(exp4[9]),
    Weapon: Number.parseFloat(exp1[10]) + Number.parseFloat(exp2[10]) + Number.parseFloat(exp3[10]) + Number.parseFloat(exp4[10]),
    Faraway: Number.parseFloat(exp1[11]) + Number.parseFloat(exp2[11]) + Number.parseFloat(exp3[11]) + Number.parseFloat(exp4[11])

}

let BellArh70 = {
    Mass: Number.parseFloat(exp1[12]) + Number.parseFloat(exp2[12]) + Number.parseFloat(exp3[12]) + Number.parseFloat(exp4[12]),
    MaxSpeed: Number.parseFloat(exp1[13]) + Number.parseFloat(exp2[13]) + Number.parseFloat(exp3[13]) + Number.parseFloat(exp4[13]),
    Weapon: Number.parseFloat(exp1[14]) + Number.parseFloat(exp2[14]) + Number.parseFloat(exp3[14]) + Number.parseFloat(exp4[14]),
    Faraway: Number.parseFloat(exp1[15]) + Number.parseFloat(exp2[15]) + Number.parseFloat(exp3[15]) + Number.parseFloat(exp4[15])

}

let Weight = {
    Mass: Boing_Sikorski.Mass + Bell206.Mass + AgustaAW109.Mass + BellArh70.Mass,
    MaxSpeed: Boing_Sikorski.MaxSpeed + Bell206.MaxSpeed + AgustaAW109.MaxSpeed + BellArh70.MaxSpeed,
    Weapon: Boing_Sikorski.Weapon + Bell206.Weapon + AgustaAW109.Weapon + BellArh70.Weapon,
    Faraway: Boing_Sikorski.Faraway + Bell206.Faraway + AgustaAW109.Faraway + BellArh70.Faraway,
}

let Sum = {
    weight: Weight.Weapon + Weight.MaxSpeed + Weight.Mass + Weight.Faraway,
    Boing_Sikorski: Boing_Sikorski.Faraway + Boing_Sikorski.Mass + Boing_Sikorski.MaxSpeed + Boing_Sikorski.Weapon,
    Bell206: Bell206.Weapon + Bell206.MaxSpeed + Bell206.Mass + Bell206.Faraway,
    AgustaAW109: AgustaAW109.Weapon + AgustaAW109.MaxSpeed + AgustaAW109.Mass + AgustaAW109.Faraway,
    BellArh70: BellArh70.Weapon + BellArh70.MaxSpeed + BellArh70.Mass + BellArh70.Faraway
}
let Mark = {
    Boing_Sikorski: Boing_Sikorski,
    Bell206: Bell206,
    AgustaAW109: AgustaAW109,
    BellArh70: BellArh70,
    Weight : Weight,
    Sum : Sum

}

console.table(Mark)




