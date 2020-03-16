// =========== render products ============= //
export const productdiv = document.getElementById('HiddenProducts');

// =========== show products ============= //
export function LoadProducts(products) {
    productdiv.innerHTML = "";
        for(let item in products){
            let divi = document.createElement('div');
            divi.setAttribute('draggable', 'true');
            divi.innerHTML = products[item].name;
            divi.style.border= "1px solid black";
            divi.classList.add("p" + item);
            divi.classList.add("draggable-product");
            productdiv.appendChild(divi);
            productdiv.style.visibility = "hidden";
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