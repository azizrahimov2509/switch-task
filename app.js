/*Berilgan misolni ishlab kelish! 3 ta promptan ma'lumot olinadi,
 1 - arifmetik operator (+,-,/,*,%),
 2 - son,
 3 - son,
 kiritikgan arifmetik operator orqali kiritilgan sonlarni yig'indisi, ko'paytmasi yoki qoldiqni aniqlang*/

let arifOperator = prompt("Arifmetik operator kiriting");

let number1 = +prompt("1-sonni kiriting",3);
let number2 = +prompt("2-sonni kiriting",2);

let result = number1 + " "+ arifOperator + " "+ number2;

switch(arifOperator){
    case "+":
        console.log(result + " = "  + (number1 + number2));
    break;
    case "-":
        console.log(result + " = " + (number1 - number2));
    break;
    case "*":
        console.log(result + " = " + number1 * number2);
    break;
    case "/":
        console.log(result + " = " + number1 / number2);
    break;
    case "%":
        console.log(result + " = " + number1 % number2);
    break;
    default:
        console.log("Operation is invalid")
}