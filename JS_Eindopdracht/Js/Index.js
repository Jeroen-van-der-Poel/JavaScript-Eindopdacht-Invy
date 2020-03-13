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

// =========== Page changes ============= //
let products = null;
const gridClass = new GridClass();
const clothing = document.getElementById('Clothing');
const tierlantin = document.getElementById('Tierlantin');
const decoration = document.getElementById('Decoration');

function switchClothes() {
    products = clothesProducts;
    header.innerHTML = "Kleding";
    grid.innerHTML = '';
    gridClass.createGrid(clothesgrid);
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
    gridClass.createGrid(decorationgrid);
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
    gridClass.createGrid(tierlantingrid);
    productdiv.innerHTML = "";
    Dropcount = 0;
}

// =========== Product initialize ============= //
const productsView = new ProductsView();
const productController = new ProductController(productsView);
productController.init();


