import { Products } from "./Products/Products";
import { clothesgrid, tierlantingrid, decorationgrid} from "./Grid/GridLayout";
import { grid, createGrid } from "./Grid/CreateGrid";
import { ShowWeather } from "./Weather/Api_Weather";
import { productdiv, Dropcount, ShowProducts } from "./Products/ShowPrducts";
import { startForm } from "./Wizard/stepzation";

const clothingbutton = document.getElementById("Clothing");
const tierlantinbutton = document.getElementById("Tierlantin");
const decorationbutton = document.getElementById("Decoration");

clothingbutton.addEventListener('click', clothesClick);
tierlantinbutton.addEventListener('click', tierlantinClick);
decorationbutton.addEventListener('click', decorationClick);

const header = document.getElementById("Header");
let currentProducts = [];

// =========== Page changes ============= //
function clothesClick() {
    header.innerHTML = "Kleding";
    grid.innerHTML = '';
    createGrid(clothesgrid);
    clothingbutton.style.color = "green";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "black";
    getProducts("clothes");
}

function tierlantinClick() {
    header.innerHTML = "Tierlantijn";
    grid.innerHTML = '';
    createGrid(tierlantingrid);
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "green";
    decorationbutton.style.color = "black";
    getProducts("tierlantin");
}

function decorationClick() {
    header.innerHTML = "Decoratie";
    grid.innerHTML = '';
    createGrid(decorationgrid);
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "green";
    getProducts("decoration");
}

// =========== weather ============= //
let weatherButton = document.querySelector('.weatherbutton');

weatherButton.addEventListener('click', WeatherFunction);

function WeatherFunction() {
    ShowWeather();
}

// =========== get products ============= //
function getProducts(regio){
    currentProducts = [];
    for(let i = 0; i < Products.length; i++){
        if(Products[i].regio === regio){
            currentProducts.push(Products[i])
        }
    }
}

// =========== show products ============= //
let productButton = document.getElementById("sidebutton");
productButton.addEventListener('click', productClick);

function productClick() {
    ShowProducts(currentProducts);
}

// =========== Wizard ============= //
let formStart = document.getElementById("StartForm");

formStart.addEventListener('click', WizardFunction);

function WizardFunction() {
    startForm();
    currentProducts = [];
    clothingbutton.style.color = "black";
    tierlantinbutton.style.color = "black";
    decorationbutton.style.color = "black";
    formStart.style.color = "green";
}

// =========== initialize ============= //
const thegrid = document.getElementById("thegrid");

function Start() {
    header.innerHTML = "Welkom";
    thegrid.innerHTML = "Kies een regio";
    thegrid.style.textAlign = "center";
}

Start();