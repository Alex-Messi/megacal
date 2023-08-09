const OPERATIONS = {
    sum: '+',
    minus: '-',
    multiplication: '*',
    divison: '/',
    degree: '**',
    percent: '%',
    root: 'sq',
};

function calculate( num1, num2, operation ){
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(num1,num2)
            break;

        case OPERATIONS.minus:
            result = minus(num1,num2)
            break;

        case OPERATIONS.multiplication:
            result = multiplication(num1,num2)
            break;

        case OPERATIONS.divison:
            result = divison(num1,num2)
            break;

        case OPERATIONS.degree:
            result = degree(num1,num2)
            break;

        case OPERATIONS.percent:
            result = percent(num1,num2)
            break;

        case OPERATIONS.root:
            result = root(num1,num2)
            break;


    }

    return result;
}

