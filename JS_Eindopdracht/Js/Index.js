// =========== Create Grid ============= //
const grid = document.getElementById("grid");

function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        grid.appendChild(cell).className = "grid-item empty";
        grid.appendChild(cell).id = c+1;

    }
}

// =========== Product model ============= //
const clothesProducts = [{
    'name': 'T-shirt',
    'color': 'red',
    'fit': 'small'
}, {
    'name': 'sweather',
    'color': 'white',
    'fit': 'medium'
},{
    'name': 'jeans',
    'color': 'blue',
    'fit': 'large'
}];

const decorationProducts = [{
    'name': 'confetti',
    'size': '10',
    'color': 'yellow',
    'amount': '4'
}, {
    'name': 'embleem',
    'size': '6',
    'color': 'red',
    'amount': '1'
},{
    'name': 'slingers',
    'size': '40',
    'color': 'red',
    'amount': '1'
}];

const tierlantinProducts = [{
    'name': 'iets',
    'weight': '20'
}, {
    'name': 'niets',
    'weight': '30'
},{
    'name': 'niks',
    'weight': '15'
}];


// =========== Product view ============= //
class ProductsView {
    init(){
        switchClothes();
    }
}

// =========== Product controller ============= //
class ProductController {
    constructor(productsView) {
        this.productsView = productsView;
    }
    init(){
        this.productsView.init();
    }

}

// =========== render products ============= //
const productdiv = document.getElementById('HiddenProducts');
let Dropcount = 0;

// =========== show products ============= //
function ShowProducts() {
    productdiv.innerHTML = "";
    if(Dropcount == 0){
        for(let i = 0; i < products.length; i++){
            let divi = document.createElement('div');
            divi.setAttribute('draggable', 'true');
            divi.text = divi.value = `${products[i]['name']}`;
            divi.innerHTML = `${products[i]['name']}`;
            divi.style.border= "1px solid black";
            productdiv.appendChild(divi).className = "draggable-product";
            productdiv.appendChild(divi).id = i;
            Dropcount = 1;
        }
    }
    else{
        productdiv.innerHTML = "";
        Dropcount = 0;
    }
}

// =========== Page changes ============= //
let products = null;
const header = document.getElementById("Header");
const clothing = document.getElementById('Clothing');
const tierlantin = document.getElementById('Tierlantin');
const decoration = document.getElementById('Decoration');

function switchClothes() {
    products = clothesProducts;
    header.innerHTML = "Kleding";
    grid.innerHTML = '';
    makeRows(15, 15);
    clothing.style.color = "green";
    tierlantin.style.color = "black";
    decoration.style.color = "black";
    productdiv.innerHTML = "";
    Dropcount = 0;
}

function switchDecoration() {
    products = decorationProducts;
    header.innerHTML = "Decoratie";
    grid.innerHTML = '';
    makeRows(15, 15);
    clothing.style.color = "black";
    tierlantin.style.color = "black";
    decoration.style.color = "green";
    productdiv.innerHTML = "";
    Dropcount = 0;
}

function switchTierlantin() {
    productdiv.innerHTML = "";
    products = tierlantinProducts;
    header.innerHTML = "Tierlantijn";
    grid.innerHTML = '';
    clothing.style.color = "black";
    tierlantin.style.color = "green";
    decoration.style.color = "black";
    makeRows(15, 15);
    productdiv.innerHTML = "";
    Dropcount = 0;
}

// =========== Product initialize ============= //
const productsView = new ProductsView();
const productController = new ProductController(productsView);
productController.init();


