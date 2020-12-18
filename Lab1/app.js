const fs = require("fs");
const readMe = fs.readFileSync("file.txt", "utf8");

const array = readMe.split(" ");

console.log("Завдання варіанту:");
console.log(array);
console.log('______________________________________________________________')

//-----------------------------------------Laplasa----------------------------------------------------------------------
function Laplasa(data) {


    const s = 0.4
    let array_v = []
    let f

    for (let i = 0; i < data.length; i += 3) {
        f = s * (Number(data[i]) + Number(data[i + 1]) + Number(data[i + 2]))
        array_v.push(f)
    }


    let min = Math.min(...array_v)


    let laplas = []

    if (min === array_v[0]) {
        for (let i = 0; i < 3; i++) {
            laplas.push(data[i])
        }
    } else if (min === array_v[1]) {
        for (let i = 3; i < 6; i++) {
            laplas.push(data[i])
        }
    } else {
        for (let i = 6; i < 9; i++) {
            laplas.push(data[i])
        }
    }
    console.log('Метод Лапласа:')
    console.log(`Значення для кожної строки матриці: ${array_v}`)
    console.log(`Мінімальне значення = ${min}`)
    console.log(` значення за методом Лапласа: ${laplas}`)
    console.log('_____________________________________________________________________________________________')


}

//----------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------Valda----------------------------------------------------------------

function Valda(data) {

    let arr_max_1 = []
    let arr_max_2 = []
    let arr_max_3 = []
    let array_max_v = []


    for (let i = 0; i < data.length; i++) {
        if (i === 0 || i === 1 || i === 2) {
            arr_max_1.push(data[i])
        } else if (i === 3 || i === 4 || i === 5) {
            arr_max_2.push(data[i])
        } else {
            arr_max_3.push(data[i])
        }
    }


    array_max_v.push(Math.max(...arr_max_1))
    array_max_v.push(Math.max(...arr_max_2))
    array_max_v.push(Math.max(...arr_max_3))


    let min_v = Math.min(...array_max_v)

    let valda = []

    if (min_v === array_max_v[0]) {
        for (let i = 0; i < 3; i++) {
            valda.push(mas[i])
        }
    } else if (min_v === array_max_v[1]) {
        for (let i = 3; i < 6; i++) {
            valda.push(mas[i])
        }
    } else {
        for (let i = 6; i < 9; i++) {
            valda.push(data[i])
        }
    }
    console.log("Метод Вальда: ")
    console.log(`max a =  ${array_max_v}`)
    console.log(`min of max = ${min_v}`)
    console.log(`значення за методом Вальда : ${valda}`)
    console.log('_____________________________________________________________________________________________')

}



//------------------------------------------Gurvica---------------------------------------------------------------


function Gurvica(data) {
    const s = 0.4

    console.log("Методом Гурвіца: ")
    let arr_max_num1 = []
    let arr_max_num2 = []
    let arr_max_num3 = []

    for (let i = 0; i < data.length; i++) {
        if (i === 0 || i === 1 || i === 2) {
            arr_max_num1.push(data[i])
        } else if (i === 3 || i === 4 || i === 5) {
            arr_max_num2.push(data[i])
        } else {
            arr_max_num3.push(data[i])
        }
    }


    let arr_min_g = []
    let arr_max_g = []

    arr_min_g.push(Math.min(...arr_max_num1))
    arr_min_g.push(Math.min(...arr_max_num2))
    arr_min_g.push(Math.min(...arr_max_num3))

    arr_max_g.push(Math.max(...arr_max_num1))
    arr_max_g.push(Math.max(...arr_max_num2))
    arr_max_g.push(Math.max(...arr_max_num3))



    let arr_g = []

    arr_g.push(s * Number(arr_min_g[0]) + (1 - s) * Number(arr_max_g[0]))
    arr_g.push(s * Number(arr_min_g[1]) + (1 - s) * Number(arr_max_g[1]))
    arr_g.push(s * Number(arr_min_g[2]) + (1 - s) * Number(arr_max_g[2]))



    let min_arr_of = Math.min(...arr_g)
    let gurvica = []

    if (min_arr_of === arr_g[0]) {
        for (let i = 0; i < 3; i++) {
            gurvica.push(data[i])
        }
    } else if (min_arr_of === arr_g[1]) {
        for (let i = 3; i < 6; i++) {
            gurvica.push(data[i])
        }
    } else {
        for (let i = 6; i < 9; i++) {
            gurvica.push(data[i])
        }
    }
    console.log(`Макс значення ${arr_max_g}`)
    console.log(`Мін значення  ${arr_min_g}`)
    console.log(`Значення Гурвіца для кожного рядка: ${arr_g}`)

    console.log(`Найркаще значення методом Гурвіца: ${Math.min(...arr_g)}`)

    console.log(`Значення методом Вальда у рядку: ${gurvica}`)
    console.log('_____________________________________________________________________________________________-')
}



//--------------------------------------------bayesa-laplassa-----------------------------------------------------------

function Bayes(data) {
    const p1 = 0.5
    const p2 = 0.35
    const p3 = 0.15
    console.log('Метод Байеса - Лапласа: ')
    let arr_b = []

    for (let i = 0; i < data.length; i += 3) {
        arr_b.push(
            Number(data[i]) * p1 + Number(data[i + 1]) * p2 + Number(data[i + 2]) * p3
        )
    }
    console.log(`Значення Байеса  кожному рядку = ${arr_b}`)

    console.log(` Найбільше значення: ${Math.max(...arr_b)}`)

    let max_num_bayes = Math.max(...arr_b);
    let bayesa = []

    if (max_num_bayes === arr_b[0]) {
        for (let i = 0; i < 3; i++) {
            bayesa.push(data[i])
        }
    } else if (max_num_bayes === arr_b[1]) {
        for (let i = 3; i < 6; i++) {
            bayesa.push(data[i])
        }
    } else {
        for (let i = 6; i < 9; i++) {
            bayesa.push(data[i])
        }
    }

    console.log(`Найкращі значення методом Байеса у рядку: ${bayesa}`)


}




            Laplasa(array)

            Valda(array)

            Gurvica(array)

            Bayes(array)











