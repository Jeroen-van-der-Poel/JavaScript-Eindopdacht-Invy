export let currentCalcValue;
let ableToAddCalc = true;

export class Calculator {
    constructor(calc) {
        this.calc = calc;
    }

    static addCalc()
    {
        currentCalcValue = "+";
        addCalculatorFields();
    }

    static minusCalc()
    {
        currentCalcValue = "-";
        addCalculatorFields();
    }

    static timesCalc()
    {
        currentCalcValue = "*";
        addCalculatorFields();
    }

    static divideCalc()
    {
        currentCalcValue = "/";
        addCalculatorFields();
    }

    static calculatorResultField() {
        let calculate;
        if (checkEmpty()) {
            document.getElementById("calculator_equals").disabled = false;
            if (currentCalcValue == "+") {
                calculate = parseInt(document.getElementById('calculator_field1').value) + parseInt(document.getElementById('calculator_field2').value);
            }
            else if (currentCalcValue == "-") {
                calculate = parseInt(document.getElementById('calculator_field1').value) - parseInt(document.getElementById('calculator_field2').value);
            }
            else if (currentCalcValue == "*") {
                calculate = parseInt(document.getElementById('calculator_field1').value) * parseInt(document.getElementById('calculator_field2').value);
            }
            else if (currentCalcValue == "/") {
                calculate = parseInt(document.getElementById('calculator_field1').value) / parseInt(document.getElementById('calculator_field2').value);
            }
            let result = document.getElementById('result_field');
            result.innerHTML = calculate.toString();

        } else {
            let result = document.getElementById('result_field');
            result.innerHTML = "Ik mis een getal";
        }
    }

    static redoCalc()
    {
        document.getElementById('calculator_field1').value = "";
        if(document.getElementById('calculator_field2')){
            document.getElementById('calculator_field2').value = "";
        }
        if(document.getElementById('result_field')){
            document.getElementById('result_field').innerHTML = "";
        }
    }

}
function addCalculatorFields(){
    if(ableToAddCalc == true)
    {
        let div = document.createElement("div");

        let field = document.createElement("label");
        field.setAttribute("id", "calc_label");
        field.innerHTML = currentCalcValue.toString();

        let resultfield = document.createElement("label");
        resultfield.setAttribute("name", "result_field");
        resultfield.setAttribute("id", "result_field");
        resultfield.innerHTML = "Result";

        div.appendChild(field);
        let inputfield = addCalculatorField();
        div.appendChild(inputfield);
        div.appendChild(resultfield);

        document.getElementById("calculatorfields").appendChild(div);

        ableToAddCalc = false;
    }
    else
    {
        changeCalculator(currentCalcValue);
    }
}

function addCalculatorField(){

    let div = document.createElement("div");
    let calculator_input = document.createElement("input");
    calculator_input.setAttribute("type", "number");
    calculator_input.setAttribute("name", "calculator_field2");
    calculator_input.setAttribute("id", "calculator_field2");

    div.appendChild(calculator_input);
    return div;

}

function changeCalculator(option) {
    document.getElementById('calc_label').innerHTML = option;
}

function checkEmpty(){
    let calculate;
    calculate = document.getElementById('calculator_field1').value;
    if(calculate == ""){
        document.getElementById("calculator_equals").disabled = true;
        return false;
    }
    return true;
}