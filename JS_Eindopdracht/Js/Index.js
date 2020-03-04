// =========== Create Grid ============= //
const grid = document.getElementById("grid");

function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        grid.appendChild(cell).className = "grid-item";
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


// =========== render products ============= //
const $productList = document.getElementById('products')

function renderClothesListModule() {
    const clothes = productController.getClothingProducts();

    $productList.innerHTML = '';

    for (let i = 0; i < clothes.length; i++){
        let option = document.createElement('option');
        option.text = option.value = `${clothes[i]['name']}`;
        $productList.add(option, 0);
    }
}

function renderTierlantinListModule() {
    const tierlantin = productController.getTierlantinProducts();

    $productList.innerHTML = '';

    for (let i = 0; i < tierlantin.length; i++){
        let option = document.createElement('option');
        option.text = option.value = `${tierlantin[i]['name']}`;
        $productList.add(option, 0);
    }
}

function renderDecorationListModule() {
    const decoration = productController.getDecorationProducts();

    $productList.innerHTML = '';

    for (let i = 0; i < decoration.length; i++){
        let option = document.createElement('option');
        option.text = option.value = `${decoration[i]['name']}`;
        $productList.add(option, 0);
    }
}

// =========== Page changes ============= //
const header = document.getElementById("Header");
const clothing = document.getElementById('Clothing');
const tierlantin = document.getElementById('Tierlantin');
const decoration = document.getElementById('Decoration');

function switchClothes() {
    header.innerHTML = "Kleding";
    grid.innerHTML = '';
    makeRows(15, 15);
    clothing.style.color = "green";
    tierlantin.style.color = "black";
    decoration.style.color = "black";
    renderClothesListModule()
}

function switchDecoration() {
    header.innerHTML = "Decoratie";
    grid.innerHTML = '';
    makeRows(15, 15);
    clothing.style.color = "black";
    tierlantin.style.color = "black";
    decoration.style.color = "green";
    renderDecorationListModule();
}

function switchTierlantin() {
    header.innerHTML = "Tierlantijn";
    grid.innerHTML = '';
    clothing.style.color = "black";
    tierlantin.style.color = "green";
    decoration.style.color = "black";
    makeRows(15, 15);
    renderTierlantinListModule();
}

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

    getClothingProducts(){
        return clothesProducts;
    }
    getDecorationProducts(){
        return decorationProducts;
    }
    getTierlantinProducts(){
        return tierlantinProducts;
    }
}

// =========== Product initialize ============= //
const productsView = new ProductsView();
const productController = new ProductController(productsView);
productController.init();
