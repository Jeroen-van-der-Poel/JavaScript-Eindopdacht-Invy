import { clothesgrid, tierlantingrid, decorationgrid} from "./Grid/GridLayout";
import { grid, createGrid } from "./Grid/CreateGrid";
import { ShowWeather } from "./Weather/Api_Weather";
import { ShowProducts } from "./Products/ShowPrducts";
import {showDiv, startForm} from "./Wizard/stepzation";
import { Warehouse, Regios } from "./Regios/Initialize"

const clothingbutton = document.getElementById("Clothing");
const tierlantinbutton = document.getElementById("Tierlantin");
const decorationbutton = document.getElementById("Decoration");
let formStart = document.getElementById("StartForm");
let formRegion = document.getElementById("product_region");

clothingbutton.addEventListener('click', clothesClick);
tierlantinbutton.addEventListener('click', tierlantinClick);
decorationbutton.addEventListener('click', decorationClick);

const header = document.getElementById("Header");

let currentRegio = null;

// =========== Page changes ============= //
function clothesClick() {
    header.innerHTML = "Kleding";
    grid.innerHTML = '';
    createGrid(Regios.getRegio("clothes").grid);
    currentRegio = null;
    currentRegio = Regios.getRegio("clothes");
    clothingbutton.style.color = "green";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "black";
    formStart.style.color = "black";
}

function tierlantinClick() {
    header.innerHTML = "Tierlantijn";
    grid.innerHTML = '';
    createGrid(Regios.getRegio("tierlantin").grid);
    currentRegio = null;
    currentRegio = Regios.getRegio("tierlantin");
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "green";
    decorationbutton.style.color = "black";
    formStart.style.color = "black";
}

function decorationClick() {
    header.innerHTML = "Decoratie";
    grid.innerHTML = '';
    createGrid(Regios.getRegio("decoration").grid);
    currentRegio = null;
    currentRegio = Regios.getRegio("decoration");
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
        ShowProducts(currentRegio.items);
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
    /*document.getElementById('product_region').addEventListener("change", showDiv(), false);*/
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "black";
    formStart.style.color = "green";
}

// =========== initialize ============= //
function Start() {
    header.innerHTML = "Welkom";
    grid.innerHTML = "Kies een regio";
    grid.style.textAlign = "center";
    grid.style.border = "none";

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

