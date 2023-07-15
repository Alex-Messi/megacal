"use strict";

let num1;
let num2;
let action;

alert('Ку, это мега крутой калькулятор!!!');

action = prompt('Выбери действие( + , - , * , : , ** , % , cq(√))');
if (action === '+' && action === '-' && action === '*' && action === ':' && action === '**' && action === '%' && action === 'sq') {

    num1 = +prompt('Первое число');
    num2 = +prompt('Второе  число');

    if (!isNaN(num1) && !isNaN(num2)) {
        switch (action) {
            case '+':
                alert(num1 + num2);
                break;
            case '-':
                alert(num1 - num2);
                break;
            case '*':
                alert(num1 * num2);
                break;
            case ':':
                alert(num1 / num2);
                break;
            case '**':
                alert(num1 ** num2);
                break;
            case '%':
                alert(num1 % num2);
                break;
            case 'sq':
                alert(num1 ** (1/num2));
                break;
            default:
        }
    }else {alert('Вы ввели не число!!!');}
}else{ alert('Вы ввели неправильное действие!!!');
}




