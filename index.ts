import promptSync from 'prompt-sync';
const prompt = promptSync();
// #1

let number : number = Number(prompt('Введи перше число: '));
if (!isNaN (number) && number <=50 && number >= 10)
console.log("Число в діапазоні")
else { console.log("Число поза діапазоном") }

// #2

let suma : number = Number(prompt('Введи загальну суму рахунку: '));
let percent : number = Number(prompt('Введи відсоток чайових (без позначки проценту): '));
let tip = `Чайові, ${((suma * percent)/100)}!`;
if (percent === 0) 
console.log("Error")
else 
console.log(tip)

// #3

let old : number = Number(prompt('Введіть вік людини: '));
    if (old <= 1 || old > 100) 
    console.log("Error");
 else
    if (old >= 6 && old <= 65)
    console.log("Безкоштовно")
 else
    if (old >= 7 && old <= 12)
    console.log("Дитячий квиток - 50 грн")
 else
    if (old >= 13 && old <= 17)
    console.log("Підлітковий квиток - 80 грн")
 else
    if (old >= 18 && old <= 64)
        console.log("Дорослий квиток - 120 грн")

// #4


let a : number = Number(prompt('Введіть 1 - сторону: '));
let b : number = Number(prompt('Введіть 2 - сторону: '));
let c : number = Number(prompt('Введіть 3 - сторону: '));
    if(isNaN(a) || isNaN(b) || isNaN(c))
    console.log("Не число!")
    else
switch(true) {
        case a + b <= c || a + c <= b || b + c <= a:
             console.log("Не трикутник")
            break;
        case a === b && b === c:
            console.log("Рівносторонній");
            break;
        case a !== b && b !== c && c !== a:
            console.log("Різносторонній");
            break;
        case a === b && a !== c || a === c && a !== b || b === c && b !== a:
            console.log("Рівнобедрений");
            break;
        default:
            console.log("Щось тут не так");
            break;
    }



// #5

let a : number = Number(prompt('Введіть кут (без позначки): '));
if (a <= 0 || a >= 180 )
    console.log("Не кут")
else
if (a > 0 && a < 90 || a == 90)
    console.log("Гострий")
else
if (a == 90 )
    console.log("Прямокутний")
else
if (a > 90 && a < 180 )
    console.log("Тупий")
