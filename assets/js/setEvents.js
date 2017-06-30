import $ from 'jquery';
import {
    updateDisplay, clearDisplay, evaluate, addOperation, getOperations
} from './functions';

$(function(){

    $('[data-num]').on('click', function () {
        var $btn = $(this),
            numValue = parseInt($btn.attr('data-num'), 10);
            addOperation(numValue);
            updateDisplay();
    });

    $('[data-operation]').on('click', function () {
        var $btn = $(this),
            operationType = $btn.attr('data-operation');
            addOperation(operationType);
            updateDisplay();
    });

    $("#clear").click(function(){
        clearDisplay();
    });

    $("#equals").click(function(){
        var exp = "";
        var operations = getOperations();

        for (var i = 0; i < operations.length; i++) {
            exp += operations[i];
        }
        evaluate(exp);
    });
});
