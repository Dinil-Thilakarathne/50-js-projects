// global variables 
const operand1 = parseFloat(document.getElementById("operand1").value);
const operand2 = parseFloat(document.getElementById("operand2").value);

function add() {
    const result = operand1 + operand2;
    document.getElementById("result").innerText = "Result: " + result;
}

function subtract() {
    const result = operand1 - operand2;
    document.getElementById("result").innerText = "Result: " + result;
}

function multiply() {
    const result = operand1 * operand2;
    document.getElementById("result").innerText = "Result: " + result;
}

function divide() {
    const result = operand1 / operand2;
    document.getElementById("result").innerText = "Result: " + result;
}