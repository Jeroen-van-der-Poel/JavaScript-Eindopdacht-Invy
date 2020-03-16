// =========== drag and drop ============= //
import {Regios} from "../Regios/Initialize";

const dropzones = document.querySelector('.grid');

let el = null;
let currentItem;
let currentClassList;
let currentProduct;

export let test = document.querySelector('.draggable-items').addEventListener('dragstart', e => {
    // console.log(e)
    e.dataTransfer.dropEffect = 'move';
    el = e.target.cloneNode(true);
    el.removeAttribute('draggable');
});

dropzones.addEventListener('dragover', (e) => {
    if (e.target.classList.contains('empty'))
    {

    }
    e.preventDefault();
});

dropzones.addEventListener('dragenter', (e) => {
    if (currentItem == null)
    {
        currentItem = e.target;
        currentClassList = currentItem.classList;

        //removes draggable from product-item
        for(let index in currentClassList)
        {
            if(/[a-z]\d/.test(currentClassList[index]))
            {
                currentProduct = currentClassList[index];
                let productItem = document.getElementsByClassName(currentClassList[index])[0];
                productItem.removeAttribute('draggable');
                productItem.style.backgroundColor = "orange";
                break;
            }
        }
    }
    let position = e.target.id;
    let row = position.split("-")[0];
    let col = position.split("-")[1];

    if (Number.isInteger(parseInt(row)))
    {
        let temp = currentRegio.grid[row][col];
        if (currentRegio.grid[row][col] == currentProduct)
        {
            e.target.style.backgroundColor = "lightgrey";
            currentRegio.grid[row][col] = "null";
            Regios.updateRegio(currentRegio);
            e.target.classList.add('empty');
            e.target.classList.remove(currentProduct);
            document.getElementById(e.target.id).removeAttribute('draggable');
        }
    }

    if (e.target.classList.contains('empty')) {
        e.target.style.backgroundColor = "black";
    }
    // currentItem = null;
});

dropzones.addEventListener('drop', (e) => {
    if (e.target.classList.contains('empty'))
    {
        e.preventDefault();
        e.target.style.backgroundColor = "yellow";
        e.target.setAttribute('draggable', true);
        e.target.classList.remove('empty');
        el = null;

        let position = e.target.id;
        let row = position.split("-")[0];
        let col = position.split("-")[1];

        currentRegio.map[row][col] = currentProduct;
        Regios.updateRegio(currentRegio);
        document.getElementById(position).classList.add(currentProduct);
    } else
    {
        let productItem = document.getElementsByClassName(currentProduct)[0];
        productItem.setAttribute('draggable',true);
        productItem.style.backgroundColor = "green";
    }
    currentItem = null;
});