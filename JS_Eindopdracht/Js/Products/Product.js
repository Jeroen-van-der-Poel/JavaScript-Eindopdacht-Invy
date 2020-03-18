import {Grid} from "../Grid/Grid";

const grid = document.getElementById("grid");
const gridClass = new Grid(grid);

export class Product{
    constructor(productdiv) {
        this.productdiv = productdiv;
    }

    LoadProducts(products) {
        this.productdiv.innerHTML = "";
        for(let item in products){
            let divi = document.createElement('div');
            divi.innerHTML = products[item].name;
            divi.style.border= "1px solid black";
            divi.classList.add("draggable-product");
            divi.classList.add("p" + item);
            if(gridClass.isStored(divi.classList[1])){
                divi.style.backgroundColor = "orange";
            }
            else{
                divi.setAttribute('draggable', 'true');
                divi.style.backgroundColor = "green";
            }
            this.productdiv.appendChild(divi);
        }
    }

    ShowProducts(){
        if(this.productdiv.style.visibility === "hidden"){
            this.productdiv.style.visibility = "visible";
        }
        else{
            this.productdiv.style.visibility = "hidden";
        }
    }
}
