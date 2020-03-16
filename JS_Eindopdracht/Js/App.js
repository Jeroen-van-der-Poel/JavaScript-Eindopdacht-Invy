import { clothesgrid, tierlantingrid, decorationgrid} from "./Grid/GridLayout";
import { grid, createGrid } from "./Grid/CreateGrid";
import { ShowWeather } from "./Weather/Api_Weather";
import { ShowProducts, LoadProducts } from "./Products/ShowProducts";
import { showDiv, startForm, changeFormRegion } from "./Wizard/stepzation";
import { Warehouse, Regios } from "./Regios/Initialize"
import {DragDrop} from "./DragAndDrop/DragDrop";

const clothingbutton = document.getElementById("Clothing");
const tierlantinbutton = document.getElementById("Tierlantin");
const decorationbutton = document.getElementById("Decoration");
let formStart = document.getElementById("StartForm");
let formRegion = document.getElementById("product_region");

clothingbutton.addEventListener('click', clothesClick);
tierlantinbutton.addEventListener('click', tierlantinClick);
decorationbutton.addEventListener('click', decorationClick);

const header = document.getElementById("Header");

export let currentRegio = null;

// =========== Page changes ============= //
function clothesClick() {
    header.innerHTML = "Kleding";
    grid.innerHTML = '';
    changeFormRegion();
    createGrid(Regios.getRegio("clothes").grid);
    currentRegio = null;
    currentRegio = Regios.getRegio("clothes");
    LoadProducts(currentRegio.items);
    clothingbutton.style.color = "green";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "black";
    formStart.style.color = "black";
}

function tierlantinClick() {
    header.innerHTML = "Tierlantijn";
    grid.innerHTML = '';
    changeFormRegion();
    createGrid(Regios.getRegio("tierlantin").grid);
    currentRegio = null;
    currentRegio = Regios.getRegio("tierlantin");
    LoadProducts(currentRegio.items);
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "green";
    decorationbutton.style.color = "black";
    formStart.style.color = "black";
}

function decorationClick() {
    header.innerHTML = "Decoratie";
    grid.innerHTML = '';
    changeFormRegion();
    createGrid(Regios.getRegio("decoration").grid);
    currentRegio = null;
    currentRegio = Regios.getRegio("decoration");
    LoadProducts(currentRegio.items);
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
        ShowProducts();
    }
}

// =========== Wizard ============= //
formStart.addEventListener('click', WizardFunction);
formRegion.addEventListener('change', changeDiv);

function changeDiv() {
    let selectboxvalue = document.getElementById('product_region').options.selectedIndex;
    showDiv(selectboxvalue);
}

function WizardFunction() {
    startForm();
    header.innerHTML = "Product toevoegen";
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "black";
    formStart.style.color = "green";
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
});

dropzones.addEventListener('dragleave', (e) => {
    dragDrop.DragLeave(e);
});
