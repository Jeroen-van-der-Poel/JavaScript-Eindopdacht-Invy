// =========== render products ============= //
export const productdiv = document.getElementById('HiddenProducts');
export let Dropcount = 0;

// =========== show products ============= //
export function ShowProducts(products) {
    productdiv.innerHTML = "";
    if(Dropcount === 0){
        for(let item in products){
            let divi = document.createElement('div');
            divi.setAttribute('draggable', 'true');
            divi.innerHTML = products[item].name;
            divi.style.border= "1px solid black";
            divi.classList.add("p" + item);
            divi.classList.add("draggable-product");
            document.getElementById("HiddenProducts").appendChild(divi);
            Dropcount = 1;
        }
    }
    else{
        productdiv.innerHTML = "";
        Dropcount = 0;
    }
}