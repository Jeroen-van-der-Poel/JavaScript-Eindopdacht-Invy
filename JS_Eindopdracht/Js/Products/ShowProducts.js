import {isStored} from "../Grid/CreateGrid";


// =========== render products ============= //
export const productdiv = document.getElementById('HiddenProducts');

// =========== show products ============= //
export function LoadProducts(products) {
    productdiv.innerHTML = "";
        for(let item in products){
            let divi = document.createElement('div');
            divi.innerHTML = products[item].name;
            divi.style.border= "1px solid black";
            divi.classList.add("draggable-product");
            divi.classList.add("p" + item);
            if(isStored(divi.classList[1])){
                divi.style.backgroundColor = "orange";
            }
            else{
                divi.setAttribute('draggable', 'true');
                divi.style.backgroundColor = "green";
            }
            productdiv.appendChild(divi);
        }
}

export function ShowProducts(){
    if(productdiv.style.visibility === "hidden"){
        productdiv.style.visibility = "visible";
    }
    else{
        productdiv.style.visibility = "hidden";
    }
}
