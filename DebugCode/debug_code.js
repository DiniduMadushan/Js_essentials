function performOperation(){
    //get user inputs

    let num1=parseInt(document.getElementById('input1').value);
    let num2=parseInt(document.getElementById('input2').value);

    //check if the inputs are valid numbers

    if(!isNaN(num1) && !isNaN(num2)){

        let result1=multiply(num1,num2);
        let result2=addition(num1,num2);
        let result3=subtraction(num1,num2);
        let result4=division(num1,num2);
        displayResult(result1,result2,result3,result4);
    }else{
        displayResult('Please enter valid numbers');
    }
}

function multiply(a,b){
    //introduce a debugger statement to pause execution
    debugger;

    return a*b;
}

function addition(a,b){
    debugger;
    return a+b;
}

function subtraction(a,b){
    debugger;
    return a-b;
}
function division(a,b){
    debugger;
    return a/b;
}

function displayResult(result1,result2,result3,result4){
    //display the result in paragraph element
    const resultElement=document.getElementById('result');
    resultElement.textContent=`the multiplication is: ${result1}
    the addition is: ${result2}
    the subtraction is: ${result3}
    the division is: ${result4}`;
}