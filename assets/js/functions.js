import $ from 'jquery';

var operations = [];

export function addOperation(op) {
    operations.push(op);
}

export function getOperations() {
    return operations;
}

export function updateDisplay(){
    var exp = "";
    for (var i = 0; i < operations.length; i++) {
        exp += operations[i];
    }
    $('#newResult').val(exp);
}

export function updateDisplayWithResult(res){
    $('#newResult').val(res);
}

export function evaluate(exp){
    clearDisplay();
    var res = eval(exp);
    operations.push(res);
    updateDisplayWithResult(res);
    emptyOperations();
}

function emptyOperations() {
    operations = [];
}

export function clearDisplay(){
    emptyOperations();
    $('#newResult').val('');
}
