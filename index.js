const inputNum1Node = document.querySelector('.js-input-num1')
const inputNum2Node = document.querySelector('.js-input-num2')
const selectOperationNode = document.querySelector('.js-select-operation')
const btnResultNode = document.querySelector('.js-btn-result')
const outputNode = document.querySelector('.js-output')


btnResultNode.addEventListener('click', function(){
    const  num1 = Number(inputNum1Node.value);
    const  num2 = Number(inputNum2Node.value);
    const  operation = selectOperationNode.value;

    const result = calculate(
        num1,
        num2,
        operation
    );

    outputNode. innerHTML = result;
})