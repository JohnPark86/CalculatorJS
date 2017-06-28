$(function(){
    var operations =[];

    $('[data-num]').on('click', function () {
        var $btn = $(this),
            numValue = parseInt($btn.attr('data-num'), 10);
            operations.push(numValue);
            updateDisplay();
    });

    $('[data-operation]').on('click', function () {
        var $btn = $(this),
            operationType = $btn.attr('data-operation');
            operations.push(operationType);
            updateDisplay();
    });

    $("#clear").click(function(){
        operations = [];
        clearDisplay();
    });

    $("#equals").click(function(){
        var exp = "";
        for (var i = 0; i < operations.length; i++) {
            exp += operations[i];
        }
        evaluate(exp);
    });

    function updateDisplay(){
         var exp = "";
        for (var i = 0; i < operations.length; i++) {
            exp += operations[i];
        }
        $('#newResult').val(exp);
    }

    function updateDisplayWithResult(res){
        $('#newResult').val(res);
    }

    function evaluate(exp){
        clearDisplay();
        operations = [];
        var res = eval(exp);
        operations.push(res);
        updateDisplayWithResult(res);
    }

    function clearDisplay(){
        operations = [];
        $('#newResult').val('');
    }
});
