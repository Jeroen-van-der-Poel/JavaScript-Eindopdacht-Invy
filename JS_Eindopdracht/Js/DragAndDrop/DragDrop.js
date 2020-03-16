import {Regios} from "../Regios/Initialize";
import {currentRegio} from "../App";

export class DragDrop{

    constructor(el, currentItem, currentClassList, currentProduct) {
        this.el = el;
        this.currentItem = currentItem;
        this.currentClassList = currentClassList;
        this.currentProduct = currentProduct;
    }

     DragStart(e){
        // console.log(e)
        e.dataTransfer.dropEffect = 'move';
        this.el = e.target.cloneNode(true);
        this.el.removeAttribute('draggable');
    }

     DragOver(e){
        if (e.target.classList.contains('empty'))
        {

        }
        e.preventDefault();
    }

     DragEnter(e){
        if (currentItem == null)
        {
            this.currentItem = e.target;
            this.currentClassList = currentItem.classList;

            //removes draggable from product-item
            for(let index in currentClassList)
            {
                if(/[a-z]\d/.test(currentClassList[index]))
                {
                    this.currentProduct = currentClassList[index];
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
                Regios.updateRegio(currentRegio);
                e.target.classList.add('empty');
                e.target.classList.remove(currentProduct);
                document.getElementById(e.target.id).removeAttribute('draggable');
            }
        }

        if (e.target.classList.contains('empty')) {
            e.target.style.backgroundColor = "green";
        }
        // currentItem = null;
    }

     Drop(e){
        if (e.target.classList.contains('empty'))
        {
            e.preventDefault();
            e.target.style.backgroundColor = "yellow";
            e.target.innerhtml = currentItem.name;
            e.target.setAttribute('draggable', true);
            e.target.classList.remove('empty');
            this.el = null;

            let position = e.target.id;
            let row = position.split("-")[0];
            let col = position.split("-")[1];

            currentRegio.grid[row][col] = currentProduct;
            Regios.updateRegio(currentRegio);
            document.getElementById(position).classList.add(currentProduct);
        } else
        {
            let productItem = document.getElementsByClassName(currentProduct)[0];
            productItem.setAttribute('draggable',true);
            productItem.style.backgroundColor = "green";
        }
        this.currentItem = null;
    }

     DragLeave(e){
        if (e.target.classList.contains('empty')) {
            e.target.style.backgroundColor = "lightgrey";
        }
    }

}



/*
const events = [
    'dragenter',
    'dragleave',
    'dragover', // to allow drop
    'drop'
];*/
