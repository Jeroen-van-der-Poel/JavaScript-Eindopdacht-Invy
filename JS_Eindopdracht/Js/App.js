import { Grid, clothesgrid, tierlantingrid, decorationgrid } from "./Grid/Grid";
import { ShowWeather } from "./Weather/Weather";
import { Product } from "./Products/Product";
import { WizardSteps } from "./Wizard/WizardSteps";
import { WizardCalculator } from "./Wizard/WizardCalculator";
import { Warehouse } from "./Initialize/Warehouse"
import { Regios } from "./Initialize/Regio"
import {DragDrop} from "./DragAndDrop/DragDrop";
import {ImageReader} from "./Products/ImageReader";

const clothingbutton = document.getElementById("Clothing");
const tierlantinbutton = document.getElementById("Tierlantin");
const decorationbutton = document.getElementById("Decoration");
let formStart = document.getElementById("StartForm");
let formRegion = document.getElementById("product_region");
const header = document.getElementById("Header");

// =========== classes ============= //
const grid = document.getElementById("grid");
const gridClass = new Grid(grid);
const productdiv = document.getElementById('HiddenProducts');
const productClass = new Product(productdiv);
const imageReader = new ImageReader();

export let currentRegio = null;

// =========== Page changes ============= //
clothingbutton.addEventListener('click', clothesClick);
function clothesClick() {
    header.innerHTML = "Kleding";
    grid.innerHTML = '';
    WizardSteps.changeFormRegion();
    gridClass.createGrid(Regios.getRegio("clothes").grid);
    currentRegio = null;
    currentRegio = Regios.getRegio("clothes");
    productClass.LoadProducts(currentRegio.items);
    clothingbutton.style.color = "green";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "black";
    formStart.style.color = "black";
}

tierlantinbutton.addEventListener('click', tierlantinClick);
function tierlantinClick() {
    header.innerHTML = "Tierlantijn";
    grid.innerHTML = '';
    WizardSteps.changeFormRegion();
    gridClass.createGrid(Regios.getRegio("tierlantin").grid);
    currentRegio = null;
    currentRegio = Regios.getRegio("tierlantin");
    productClass.LoadProducts(currentRegio.items);
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "green";
    decorationbutton.style.color = "black";
    formStart.style.color = "black";
}

decorationbutton.addEventListener('click', decorationClick);
function decorationClick() {
    header.innerHTML = "Decoratie";
    grid.innerHTML = '';
    WizardSteps.changeFormRegion();
    gridClass.createGrid(Regios.getRegio("decoration").grid);
    currentRegio = null;
    currentRegio = Regios.getRegio("decoration");
    productClass.LoadProducts(currentRegio.items);
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "green";
    formStart.style.color = "black";
}

// =========== weather ============= //
let weatherButton = document.querySelector('.weatherbutton');
weatherButton.addEventListener('click', WeatherFunction);
function WeatherFunction() {
    ShowWeather();
}

// =========== show products ============= //
let productButton = document.getElementById("sidebutton");
productButton.addEventListener('click', productClick);
function productClick() {
    if(currentRegio != null){
        productClass.ShowProducts();
    }
}

// =========== Wizard ============= //
formStart.addEventListener('click', WizardFunction);
formRegion.addEventListener('change', changeDiv);
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('AddField').addEventListener('click', WizardSteps.addField)
});
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', WizardSteps.addProduct)
});
document.getElementById('calculator_plus').addEventListener('click', WizardCalculator.addCalc)
document.getElementById('calculator_minus').addEventListener('click', WizardCalculator.minusCalc)
document.getElementById('calculator_times').addEventListener('click', WizardCalculator.timesCalc);
document.getElementById('calculator_divide').addEventListener('click', WizardCalculator.divideCalc);
document.getElementById('calculator_redo').addEventListener('click', WizardCalculator.redoCalc);
document.getElementById('calculator_equals').addEventListener('click', WizardCalculator.calculatorResultField);
document.addEventListener('change',function(e){
    if(e.target && e.target.id=== 'calculator_field2'){
        WizardCalculator.calculatorResultField();
    }
});

function changeDiv() {
    let selectboxvalue = document.getElementById('product_region').options.selectedIndex;
    WizardSteps.showDiv(selectboxvalue);
}

function WizardFunction() {
    WizardSteps.startForm();
    WizardSteps.emptyFields();
    header.innerHTML = "Product toevoegen";
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "black";
    formStart.style.color = "green";
    productdiv.innerHTML = "";
}

// =========== initialize ============= //
export function Start() {
    currentRegio = null;
    header.innerHTML = "Welkom";
    grid.innerHTML = "Kies een regio";
    grid.style.textAlign = "center";
    grid.style.border = "none";
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "black";
    formStart.style.color = "black";

    window.onload = function () {
        if(localStorage.getItem("regios") === null){
            let clothes = new Warehouse("clothes", [], []);
            clothes.grid = clothesgrid;
            Regios.addRegios(clothes);
            let decoration = new Warehouse("decoration", [], []);
            decoration.grid = decorationgrid;
            Regios.addRegios(decoration);
            let tierlantin = new Warehouse("tierlantin", [], []);
            tierlantin.grid = tierlantingrid;
            Regios.addRegios(tierlantin);
        }
        else{
            Regios.getRegios();
        }
    };
}

Start();

// =========== drag and drop ============= //
const dropzones = document.getElementById('grid');
let el = null;
let currentItem;
let currentClassList;
let currentProduct;
const dragDrop = new DragDrop(el, currentItem, currentClassList, currentProduct);

document.querySelector('.draggable-items').addEventListener('dragstart', e => {
    dragDrop.DragStart(e);
});

dropzones.addEventListener('dragover', (e) => {
    dragDrop.DragOver(e);
});

dropzones.addEventListener('dragenter', (e) => {
    dragDrop.DragEnter(e);
});

dropzones.addEventListener('drop', (e) => {
    dragDrop.Drop(e);
    productdiv.style.visibility = "visible";
    productClass.LoadProducts(currentRegio.items);
});

dropzones.addEventListener('dragleave', (e) => {
    dragDrop.DragLeave(e);
    productdiv.style.visibility = "visible";
    productClass.LoadProducts(currentRegio.items);
});

document.getElementById("grid").addEventListener("click", function(e) {
    dragDrop.OnClickItem(e);
    imageReader.LoadPicture();
});

// =========== Image Reader ============= //
document.getElementById("image1").addEventListener("change", e => {
    imageReader.ReadFile(e);
});
