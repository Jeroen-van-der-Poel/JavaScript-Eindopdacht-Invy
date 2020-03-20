// =========== Create Grid ============= //
const grid = document.getElementById("grid");

clothesgrid =
    [
        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],
        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],
        ['-', '-', '-','-', '-', '-','|', '|', '|','|', '|', '|','|', '|', '|'],
        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['|', '|', '|','|', '|', '|','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','-', '-', '@','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['|', '|', '|','|', '|', '|','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],
        ['-', '@', '@','-', '-', '-','|', '|', '-','-', '-', '-','@', '@', '-'],
        ['-', '-', '-','-', '-', '-','|', '|', '-','-', '-', '-','-', '-', '-'],
    ];
decorationgrid =
    [
        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','@', '@', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '|','|', '|', '|'],
        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '|','-', '-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '|','-', '-', '-'],
        ['-', '-', '-','-', '-', '-','-', '|', '|','|', '|', '|','-', '-', '-'],
        ['-', '-', '-','-', '-', '-','-', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','-', '-', '-','@', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','-', '-', '@','@', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '|','|', '|', '|','|', '|', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '@', '-','-', '-', '-'],
        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '@', '-','-', '-', '-'],
        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '|','-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
    ];
tierlantingrid =
    [
        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','|', '@', '-','-', '-', '-','-', '@', '-','-', '-', '-'],
        ['-', '-', '-','|', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-'],
        ['-', '-', '-','|', '|', '|','|', '|', '|','|', '|', '|','|', '-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],
        ['-', '-', '-','-', '@', '-','-', '-', '-','-', '@', '-','|', '-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],
        ['-', '@', '@','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],
        ['-', '@', '@','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],
        ['-', '-', '-','-', '-', '-','-', '-', '-','-', '-', '-','|', '-', '-'],
    ];

// =========== grid class ============= //
class GridClass{

    createGrid(array){
        let rows = 0;
        let cols = 0;
        for(let i = 0; i < array.length; i++){
            rows += (1);
            for(let j =0; j < array[i].length; j++){
                cols += (1);
            }
        }
        grid.style.setProperty('--grid-rows', cols);
        grid.style.setProperty('--grid-cols', rows);
        let count = 0;
        for (let c = 0; c < rows; c++) {
            for(let d = 0; d < cols/15; d++){
                let cell = document.createElement("div");
                if(array[c][d].valueOf() === "-"){
                    grid.appendChild(cell).className = "grid-item empty";
                    grid.appendChild(cell).style.backgroundColor = "lightgray";
                }
                if(array[c][d].valueOf() === "@"){
                    grid.appendChild(cell).className = "grid-item wall";
                    grid.appendChild(cell).style.backgroundColor = "black";
                }
                if(array[c][d].valueOf() === "|"){
                    grid.appendChild(cell).className = "grid-item floor";
                    grid.appendChild(cell).style.backgroundColor = "darkgray";
                }
                grid.appendChild(cell).id = (c + "-" + d);
                grid.appendChild(cell).style.minWidth = '61.2px';
                grid.appendChild(cell).style.minHeight = '56px';
                grid.appendChild(cell).style.maxWidth = '61.2px';
                grid.appendChild(cell).style.maxHeight = '56px';
                count++;
            }
        }
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

// =========== render products ============= //
const productdiv = document.getElementById('HiddenProducts');
let Dropcount = 0;

// =========== Product controller ============= //
class ProductController {
    constructor(productsView) {
        this.productsView = productsView;
    }
    init(){
        this.productsView.init();
    }

}

// =========== show products ============= /\/
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
const gridClass = new GridClass();
const header = document.getElementById("Header");
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


