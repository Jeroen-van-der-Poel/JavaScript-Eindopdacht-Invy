import { Warehouse } from "../Initialize/Warehouse"
import { Regios } from "../Initialize/Regio"
import { Start } from "../App";

const  __fade_in = ' animated fadeIn';
const __fade_out = ' animated fadeOut';

export let enableForm = false;
let checkExtraField = false;
export let calculatorCount = 1;
export let resultCount = 1;
let currentCalcValue;
let ableToAddCalc = true;
let ableToAddCalcField = false;

export class WizardSteps {
    constructor(wizard) {
        this.wizard = wizard;
    }

    static getCalcCount(){
        return calculatorCount;
    }

    static addProduct(){
        let selectregionvalue = document.getElementById('product_region').options.selectedIndex;
        let selectsizevalue;
        let sizevalue;
        if(document.getElementById('product_region').options.selectedIndex == 0) {
            selectsizevalue = document.getElementById('product_size').options.selectedIndex;
            sizevalue = document.getElementById("product_size").options.item(selectsizevalue).text;
        }
        else {
            sizevalue = "";
        }
        let sellpricewithbtw = JSON.stringify(document.getElementById('product_sell_price').value * 1.21);
        let extrafield;
        if(document.getElementById('extra_field')){
            extrafield = document.getElementById('extra_field').value;
            document.getElementById('extra_field').value = "";
        }
        else{
            extrafield = "";
        }

        let product = {
            id: Date.now(),
            name: document.getElementById('product_name').value,
            description: document.getElementById('product_description').value,
            region: document.getElementById("product_region").options.item(selectregionvalue).text,
            colour: document.getElementById('clothing_colour').value,
            size: sizevalue,
            weight: document.getElementById('weight').value,
            size_in_cm: document.getElementById('size_in_cm').value,
            decoration_colour: document.getElementById('decoration_colour').value,
            amount_in_package: document.getElementById('amount_in_package').value,
            buy_price: document.getElementById('product_buy_price').value,
            sell_price_no_btw: document.getElementById('product_sell_price').value,
            sell_price_with_btw: sellpricewithbtw,
            product_minimal_storage: document.getElementById('product_minimal_storage').value,
            image: "",
            special_product_field: extrafield
        };
        console.log(product);
        document.getElementById('product_name').value = "";
        document.getElementById('product_description').value = "";
        document.getElementById('clothing_colour').value = "";
        document.getElementById('weight').value = "";
        document.getElementById('size_in_cm').value = "";
        document.getElementById('decoration_colour').value = "";
        document.getElementById('amount_in_package').value = "";
        document.getElementById('product_buy_price').value = "";
        document.getElementById('product_sell_price').value = "";
        document.getElementById('product_minimal_storage').value = "";

        function translate(word){
            switch (word.toLowerCase()) {
                case "kleding":
                    return "clothes";
                case "decoratie":
                    return "decoration";
                case "tierlantijn":
                    return "tierlantin";
            }
        }
        
        let itemRegio = Regios.getRegio(translate(product.region));
        itemRegio.items.push(product);
        Regios.updateRegio(itemRegio);
    };

    static startForm() {
        document.getElementById('fieldGroupDivDecoration').style.display = "none";
        document.getElementById('fieldGroupDivTierlantijn').style.display = "none";
        if(enableForm == false)
        {
            document.getElementById('thegrid').style.display = "none";
            document.getElementById('setup').style.display = "block";
            wizardsteps.start();
            enableForm = true;
        }
        else{
            document.getElementById('thegrid').style.display = "block";
            document.getElementById('setup').style.display = "none";
            enableForm = false;
        }
    }

    static changeFormRegion() {
        document.getElementById('thegrid').style.display = "block";
        document.getElementById('setup').style.display = "none";
        enableForm = false;
    }

    static showDiv(select){
        if(select=== 0){
            document.getElementById('fieldGroupDivClothing').style.display = "block";
            document.getElementById('product_size').value = "S";
        } else{
            document.getElementById('fieldGroupDivClothing').style.display = "none";
            document.getElementById('clothing_colour').value = "";
            document.getElementById('product_size').value = "";
        }
        if(select=== 1){
            document.getElementById('fieldGroupDivTierlantijn').style.display = "block";
        } else{
            document.getElementById('fieldGroupDivTierlantijn').style.display = "none";
            document.getElementById('weight').value = "";
        }
        if(select=== 2){
            document.getElementById('fieldGroupDivDecoration').style.display = "block";
        } else{
            document.getElementById('fieldGroupDivDecoration').style.display = "none";
            document.getElementById('size_in_cm').value = "";
            document.getElementById('decoration_colour').value = "";
            document.getElementById('amount_in_package').value = "";
        }
    }

    static addField(){
        if(checkExtraField == false)
        {
            let div = document.createElement("div");

            let label = document.createElement("label");
            label.innerHTML = "Eigenschap";

            let text = document.createElement("input");
            text.setAttribute("type", "text");
            text.setAttribute("name", "text");
            text.setAttribute("id", "extra_field");

            div.appendChild(label);
            div.appendChild(text);

            document.getElementById("extrafield").appendChild(div);

            checkExtraField = true;
        }
        else{
            alert("Je hebt al een extra veld toegevoegd.");
        }
    }

    static addCalculatorAddField(){
        if(ableToAddCalc == true)
        {
            currentCalcValue = "+";
            let div = document.createElement("div");

            let field = document.createElement("label");
            field.innerHTML = "+";

            let resultfield = document.createElement("label");
            resultfield.setAttribute("name", "result_field" + resultCount);
            resultfield.setAttribute("id", "result_field" + resultCount);
            resultfield.innerHTML = "Result";

            div.appendChild(field);
            let inputfield = addCalculatorField();
            div.appendChild(inputfield);
            div.appendChild(resultfield);

            document.getElementById("calculatorfields").appendChild(div);

            ableToAddCalc = false;
        }

    }

    static addCalculatorMinusField(){
        if(ableToAddCalc == true) {
            currentCalcValue = "-";
            let div = document.createElement("div");

            let field = document.createElement("label");
            field.innerHTML = "-";

            let resultfield = document.createElement("label");
            resultfield.setAttribute("name", "result_field" + resultCount);
            resultfield.setAttribute("id", "result_field" + resultCount);
            resultfield.innerHTML = "Result";

            div.appendChild(field);
            let inputfield = addCalculatorField();
            div.appendChild(inputfield);
            div.appendChild(resultfield);


            document.getElementById("calculatorfields").appendChild(div);
            document.getElementById("calculatorfields").appendChild(inputfield);

            ableToAddCalc = false;
        }

    }

    static addCalculatorTimesField(){
        if(ableToAddCalc == true) {
            currentCalcValue = "*";
            let div = document.createElement("div");

            let field = document.createElement("label");
            field.innerHTML = "*";

            let resultfield = document.createElement("label");
            resultfield.setAttribute("name", "result_field" + resultCount);
            resultfield.setAttribute("id", "result_field" + resultCount);
            resultfield.innerHTML = "Result";

            div.appendChild(field);
            let inputfield = addCalculatorField();
            div.appendChild(inputfield);
            div.appendChild(resultfield);


            document.getElementById("calculatorfields").appendChild(div);
            document.getElementById("calculatorfields").appendChild(inputfield);

            ableToAddCalc = false;
        }

    }

    static addCalculatorDivideField(){
        if(ableToAddCalc == true) {
            currentCalcValue = "/";
            let div = document.createElement("div");

            let field = document.createElement("label");
            field.innerHTML = "/";

            let resultfield = document.createElement("label");
            resultfield.setAttribute("name", "result_field" + resultCount);
            resultfield.setAttribute("id", "result_field" + resultCount);
            resultfield.innerHTML = "Result";

            div.appendChild(field);
            let inputfield = addCalculatorField();
            div.appendChild(inputfield);
            div.appendChild(resultfield);


            document.getElementById("calculatorfields").appendChild(div);
            document.getElementById("calculatorfields").appendChild(inputfield);

            ableToAddCalc = false;
        }

    }

    static calculatorResultField(){
        let calculate;
        if(checkEmpty()){
        if(currentCalcValue == "+"){
            let tempCount = calculatorCount - 1;
            calculate = parseInt(document.getElementById('calculator_field' + tempCount).value) + parseInt(document.getElementById('calculator_field' + calculatorCount).value);
        }
        if(currentCalcValue == "-"){
            let tempCount = calculatorCount - 1;
            calculate = parseInt(document.getElementById('calculator_field' + tempCount).value) - parseInt(document.getElementById('calculator_field' + calculatorCount).value);
        }
        if(currentCalcValue == "*"){
            let tempCount = calculatorCount - 1;
            calculate = parseInt(document.getElementById('calculator_field' + tempCount).value) * parseInt(document.getElementById('calculator_field' + calculatorCount).value);
        }
        if(currentCalcValue == "/"){
            let tempCount = calculatorCount - 1;
            calculate = parseInt(document.getElementById('calculator_field' + tempCount).value) / parseInt(document.getElementById('calculator_field' + calculatorCount).value);
        }
            let result = document.getElementById('result_field' + resultCount);
            result.innerHTML = calculate.toString();
            ableToAddCalc = true;
        }
        else {
            let result = document.getElementById('result_field' + resultCount);
            result.innerHTML = "Ik mis een getal";
        }

    }

}

function addCalculatorField(){
    if(calculatorCount < 10){
        calculatorCount += 1;
        let div = document.createElement("div");
        let calculator_input = document.createElement("input");
        calculator_input.setAttribute("type", "number");
        calculator_input.setAttribute("name", "calculator_field" + calculatorCount);
        calculator_input.setAttribute("id", "calculator_field" + calculatorCount);

        div.appendChild(calculator_input);
        return div;
    }
    else {
        return alert("Je hebt al genoeg calculator velden toegevoegd.");
    }
}

function checkEmpty(){
    let tempCount = calculatorCount - 1;
    let calculate;
    calculate = document.getElementById('calculator_field' + tempCount).value;
    if(calculate == ""){
        return false
    }
    else{
        return true;
    }
}

document.addEventListener('DOMContentLoaded', function(e) {
    window.wizardsteps = new Wizard_Steps(document.getElementById('setup'));

    wizardsteps.handle_error = function(error) {
        backdrop_error(error);
    };

    wizardsteps.handle_finish = function(step) {
        alert('Alle stappen voltooid.');
        Start();
        enableForm = false;
    };

});

let Wizard_Steps = function(elem) {
    let _this = this;

    _this.db = {};

    _this.elem = elem;
    _this.steps = elem.querySelectorAll('.step-by-step-step');

    /**
     * Initializer
     *
     * Runs at instantiation.
     */
    _this.init = function () {
        for (let i = 0; i < _this.steps.length; i++) {
            let step = _this.steps[i];
            let step_prev_btn = step.querySelector('[data-type="prev"]');
            let step_next_btn = step.querySelector('[data-type="next"]');

            if (step_prev_btn != null)
                step_prev_btn.addEventListener('click', function(e) { _this.previous_step(); });

            if (step_next_btn != null)
                step_next_btn.addEventListener('click', function(e) { _this.next_step(); });

            step.setAttribute('data-active', '0');
            step.setAttribute('data-step-id', i);
        }
    };

    /**
     * Will start the setup.
     */
    _this.start = function() {
        _this.activate_step(_this.steps[0]);
    };

    /**
     * Get the ID of the current step.
     *
     * @return Int | null
     */
    _this.get_current_step_id = function () {
        for (let i = 0; i < _this.steps.length; i++) {
            let step = _this.steps[i];

            if (step.getAttribute('data-active') == '1')
                return parseInt(step.getAttribute('data-step-id'));
        }

        return null;
    };

    /**
     * Make the setup go to the next step.
     */
    _this.next_step = function () {
        let current_id = _this.get_current_step_id();

        if (current_id == null)
            return;

        let errors = [];

        if (typeof _this.next_step_action != 'undefined') {
            if (_this.next_step_action != null && _this.next_step_action) {
                errors = _this.next_step_action(_this.steps[current_id]);
            }
        }

        if (typeof errors == 'undefined')
            errors = [];

        if (errors.length > 0) {
            for (let i = 0; i < errors.length; i++) {
                /* Making the error handler none-proprietary by
                 * making it possible for other developers to create a custom
                 * error handler.
                 */
                if (typeof _this.handle_error != 'undefined') {
                    if (_this.handle_error != null && _this.handle_error) {
                        _this.handle_error(errors[i]);
                    }
                }
            }

            return;
        }

        let next_id = current_id + 1;

        if(this.get_current_step_id() > 0){
            if(document.getElementById('product_name').value == "")
            {
                alert("Naam moet ingevuld zijn");
                next_id = current_id;
            }
        }

        if (next_id >= _this.steps.length) {
            /* Making the finish action none-proprietary by
             * making it possible for other developers to create custom
             * finish actions.
             */
            if (typeof _this.handle_finish != 'undefined') {
                if (_this.handle_finish != null && _this.handle_finish) {
                    _this.handle_finish(_this.steps[current_id]);
                }
            }
            _this.deactivate_step(_this.steps[current_id]);
        } else {
            _this.activate_step(_this.steps[next_id]);
        }
    };

    /**
     * Make the setup go to the previous step.
     */
/*    _this.previous_step = function () {
        let current_id = _this.get_current_step_id();

        if (current_id == null)
            return;

        let prev_id = current_id - 1;
        _this.activate_step(_this.steps[prev_id]);
    };*/

    /**
     * Activate a single step,
     * will deactivate all other steps.
     */
    _this.activate_step = function(step) {
        for (let i = 0; i < _this.steps.length; i++) {
            let _step = _this.steps[i];

            if (_step == step)
                continue;

            _this.deactivate_step(_step);
        }

        step.className = step.className.replace(__fade_out, '');
        step.className += __fade_in;
        step.setAttribute('data-active', '1');
    };

    /**
     * Deactivate a single step.
     */
    _this.deactivate_step = function(step) {
        if (step.className.indexOf(__fade_in) > -1) {
            step.className = step.className.replace(__fade_in, '');
            step.className += __fade_out;
        }
        step.setAttribute('data-active', '0');
    }

    _this.init();
};
