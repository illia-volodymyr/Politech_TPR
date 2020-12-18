const fs = require("fs");
const readMe = fs.readFileSync("ABC.txt", "utf8");
const readMe2 = fs.readFileSync("nums.txt", "utf8");
// const arr = []
const masAbc = readMe.split(" "); // розбиваю в масив по пробілу
const masNums = readMe2.split(" "); // розбиваю в масив по пробілу

console.log("Завдання варіанту:");
console.log(masAbc);
console.log(masNums);
console.log("Обрахунок методом Борда: ");
let A = 0;
let B = 0;
let C = 0;


function borda(candidate, calulator){
    let vote = 0;

    if(calulator === 'kilkistA'){
        vote = kilkistA;
    }else if(calulator === 'kilkistB'){
        vote = kilkistB;
    }else if(calulator === 'kilkistC'){
        vote = kilkistC;
    }

    if(masAbc[0][0] === candidate){
        vote += masNums[0] * 3;
    }else if(masAbc[0][1] === candidate){
        vote += masNums[0] * 2;
    }else if(masAbc[0][2] === candidate){
        vote += masNums[0] * 1;
    }
    if(masAbc[1][0] === candidate){
        vote += masNums[1] * 3;
    }else if(masAbc[1][1] === candidate){
        vote += masNums[1] * 2;
    }else if(masAbc[1][2] === candidate){
        vote += masNums[1] * 1;
    }
    if(masAbc[2][0] === candidate){
        vote += masNums[2] * 3;
    }else if(masAbc[2][1] === candidate){
        vote += masNums[2] * 2;
    }else if(masAbc[2][2] === candidate){
        vote += masNums[2] * 1;
    }
    if(masAbc[3][0] === candidate){
        vote += masNums[3] * 3;
    }else if(masAbc[3][1] === candidate){
        vote += masNums[3] * 2;
    }else if(masAbc[3][2] === candidate){
        vote += masNums[3] * 1;
    }
    if(masAbc[4][0] === candidate){
        vote += masNums[4] * 3;
    }else if(masAbc[4][1] === candidate){
        vote += masNums[4] * 2;
    }else if(masAbc[4][2] === candidate){
        vote += masNums[4] * 1;
    }

    console.log(vote);
    return vote;

};
console.log('А = ');
const borda_A = borda('A', A);
console.log('Б = ');
const borda_B = borda('B', B);
console.log('В = ');
const bordA_C = borda('C', C);

if(borda_A > borda_B && borda_A > bordA_C){
    console.log(`Виграв кандидат А ${borda_A}`);
}else if(borda_B > borda_A && borda_B > bordA_C){
    console.log(`Виграв кандидат Б  ${borda_B}`);
}else if(bordA_C > borda_A && bordA_C > borda_B){
    console.log(`Виграв кандидат В  ${bordA_C}`);
}

// Кондорсе

console.log('Метод Кондорсе: ');

A = 0;
B = 0;
C = 0;

function kondorse(candidate_1, candidate_2, calculator){

    let kondor = 0;
    if(calculator === 'A'){
        kondor = A;
    }else if(calculator === 'B'){
        kondor = B;
    }else if(calculator === 'C'){
        kondor = C;
    }

    if(masAbc[0].indexOf(candidate_1) < masAbc[0].indexOf(candidate_2)){
        kondor += Number.parseInt(masNums[0]);
    };
    if(masAbc[1].indexOf(candidate_1) < masAbc[1].indexOf(candidate_2)){
        kondor += Number.parseInt(masNums[1]);
    };
    if(masAbc[2].indexOf(candidate_1) < masAbc[2].indexOf(candidate_2)){
        kondor += Number.parseInt(masNums[2]);
    };
    if(masAbc[3].indexOf(candidate_1) < masAbc[3].indexOf(candidate_2)){
        kondor += Number.parseInt(masNums[3]);
    };
    if(masAbc[4].indexOf(candidate_1) < masAbc[4].indexOf(candidate_2)){
        kondor += Number.parseInt(masNums[4]);
    };

    // console.log(kondor);
    return kondor;
}
// abc абв

const AB = kondorse('A', 'B', A);
const BA = kondorse('B', 'A', B);
const AC = kondorse('A', 'C', A);
const CA = kondorse('C', 'A', C);
const BC = kondorse('B', 'C', B);
const CB = kondorse('C', 'B', C);

console.log(` А і Б, де А набрав: ${AB} голосів, Б: ${BA} голосів`);
console.log(` А і В, де А набрав: ${AC} голосів, В: ${CA} голосів`);
console.log(` Б і В, де Б набрав: ${BC} голосів, В: ${CB} голосів`);

let win_Kondrose = Math.max(AB, BA, AC, CA, BC, CB);
console.log(AB, BA, AC, CA, BC, CB)
console.log(win_Kondrose)

if(AB === win_Kondrose){
    console.log(`Найбільше голосів набрав кандидат А, кількість голосів = ${win_Kondrose}`);
}else if(CB === win_Kondrose){
    console.log(`Найбільше голосів набрав кандидат В, кількість голосів = ${win_Kondrose}`);
} else if(AC === win_Kondrose){
    console.log(`Найбільше голосів набрав кандидат А, кількість голосів = ${win_Kondrose}`);
}else if(CA === win_Kondrose){
    console.log(`Найбільше голосів набрав кандидат В, кількість голосів = ${win_Kondrose}`);
}else if(BC === win_Kondrose){
    console.log(`Найбільше голосів набрав кандидат Б, кількість голосів = ${win_Kondrose}`);
}else if(BA === win_Kondrose){
    console.log(`Найбільше голосів набрав кандидат Б, кількість голосів = ${win_Kondrose}`);
}



