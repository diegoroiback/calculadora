let operation = document.getElementById('operation');
let value = document.getElementById('value');
let reset = document.getElementById('reset');
let btn = document.querySelectorAll('.key');
let btnValue = document.getElementById('total');
let operationValue = '';
let getOperation = '';
let finalValue = '';

btn.forEach(function (e) {
    e.addEventListener('click', () => {
        //Ingresar operación
        setOperation = e.getAttribute('data-value')
        getOperation += setOperation

        //Imprimir operación
        number = e.innerHTML;
        operationValue += number;
        operation.innerHTML = operationValue;
    })
})

//Dar resultado
btnValue.addEventListener('click', () => {
    finalValue = eval(getOperation)
    value.innerHTML = finalValue

    //pasar valor final a valor inicial por si se hacen más operaciones con el resultado
    getOperation = finalValue
    operationValue = finalValue
})

//Resetear
reset.addEventListener('click', function () {
    operationValue = '';
    getOperation = '';
    finalValue = '';
    operation.innerHTML = operationValue;
    value.innerHTML = '';
})