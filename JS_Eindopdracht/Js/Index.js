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
const products = [{
    'name': 'T-shirt',
    'color': 'red',
    'fit': 'small',
    'regio': 'clothes'
}, {
    'name': 'sweather',
    'color': 'white',
    'fit': 'medium',
    'regio': 'clothes'
},{
    'name': 'jeans',
    'color': 'blue',
    'fit': 'large',
    'regio': 'clothes'
},{
    'name': 'confetti',
    'size': '10',
    'color': 'yellow',
    'amount': '4',
    'regio': 'decoration'
}, {
    'name': 'embleem',
    'size': '6',
    'color': 'red',
    'amount': '1',
    'regio': 'decoration'
},{
    'name': 'slingers',
    'size': '40',
    'color': 'red',
    'amount': '1',
    'regio': 'decoration'
},{
    'name': 'iets',
    'weight': '20',
    'regio': 'tierlantin'
}, {
    'name': 'niets',
    'weight': '30',
    'regio': 'tierlantin'
},{
    'name': 'niks',
    'weight': '15',
    'regio': 'tierlantin'
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
productdiv.style.visibility = "hidden";

// =========== show products ============= //
function ShowProducts() {
    if (productdiv.style.visibility === "hidden"){
        productdiv.style.visibility = "visible"
    }
    else{
        productdiv.style.visibility = "hidden";
    }
}

// =========== Page changes ============= //
const header = document.getElementById("Header");
const clothing = document.getElementById('Clothing');
const tierlantin = document.getElementById('Tierlantin');
const decoration = document.getElementById('Decoration');

// =========== load products ============= //
function LoadProducts() {
    for(let i = 0; i < products.length; i++){
        let divi = document.createElement('div');
        divi.setAttribute('draggable', 'true');
        divi.text = divi.value = `${products[i]['name']}`;
        divi.innerHTML = `${products[i]['name']}`;
        divi.style.border= "1px solid black";
        productdiv.appendChild(divi).className = "draggable-product";
        productdiv.appendChild(divi).id = i;
    }
}

const items = document.getElementsByClassName('draggable-product');

function ShowRightProducts(){
    LoadProducts();
        for(let i = 0; i < items.length; i++){
            console.log(items.length.valueOf().regio);
            if(items[i].valueOf().regio === 'clothes'){
                items[i].style.visibility = 'visible'
            }
            else{
                items[i].style.visibility = 'hidden'
            }
        }
}

function switchClothes() {
    header.innerHTML = "Kleding";
    grid.innerHTML = '';
    makeRows(15, 15);
    clothing.style.color = "green";
    tierlantin.style.color = "black";
    decoration.style.color = "black";
    ShowRightProducts();
}

function switchDecoration() {
    header.innerHTML = "Decoratie";
    grid.innerHTML = '';
    makeRows(15, 15);
    clothing.style.color = "black";
    tierlantin.style.color = "black";
    decoration.style.color = "green";
    LoadProducts();
}

function switchTierlantin() {
    header.innerHTML = "Tierlantijn";
    grid.innerHTML = '';
    clothing.style.color = "black";
    tierlantin.style.color = "green";
    decoration.style.color = "black";
    makeRows(15, 15);
    LoadProducts();
}

// =========== Product initialize ============= //
const productsView = new ProductsView();
const productController = new ProductController(productsView);
productController.init();

