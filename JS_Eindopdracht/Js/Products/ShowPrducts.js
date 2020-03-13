// =========== render products ============= //
export const productdiv = document.getElementById('HiddenProducts');
export let Dropcount = 0;

// =========== show products ============= //
export function ShowProducts(products) {
    productdiv.innerHTML = "";
    if(Dropcount === 0){
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