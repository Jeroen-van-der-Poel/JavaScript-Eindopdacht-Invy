import {Regios} from "../Initialize/Initialize";
import {currentRegio} from "../App";

export class DragDrop{
    constructor(el, currentItem, currentClassList, currentProduct) {
        this.el = el;
        this.currentItem = currentItem;
        this.currentClassList = currentClassList;
        this.currentProduct = currentProduct;
    }

     DragStart(e){
        e.dataTransfer.dropEffect = 'move';
        this.el = e.target.cloneNode(true);
        this.el.removeAttribute('draggable');

         if (this.currentItem == null)
         {
             this.currentItem = e.target;
             this.currentClassList = this.currentItem.classList;

             //removes draggable from product-item
             for(let index in this.currentClassList)
             {
                 if(/[a-z]\d/.test(this.currentClassList[index]))
                 {
                     this.currentProduct = this.currentClassList[index];
                     let productItem = document.getElementsByClassName(this.currentClassList[index])[0];
                     productItem.removeAttribute('draggable');
                     productItem.style.backgroundColor = "orange";
                     break;
                 }
             }
         }
    }

     DragOver(e){
        if (e.target.classList.contains('empty'))
        {

        }
        e.preventDefault();
    }

     DragEnter(e){
         if (this.currentItem == null)
         {
             this.currentItem = e.target;
             this.currentClassList = this.currentItem.classList;

             //removes draggable from product-item
             for(let index in this.currentClassList)
             {
                 if(/[a-z]\d/.test(this.currentClassList[index]))
                 {
                     this.currentProduct = this.currentClassList[index];
                     let productItem = document.getElementsByClassName(this.currentClassList[index])[0];
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
            if (currentRegio.grid[row][col] == this.currentProduct)
            {
                e.target.style.backgroundColor = "lightgrey";
                currentRegio.grid[row][col] = "-";
                Regios.updateRegio(currentRegio);
                e.target.classList.add('empty');
                e.target.classList.remove(this.currentProduct);
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
            e.target.style.backgroundColor = "blue";
            e.target.classList.remove('empty');
            this.el = null;

            let position = e.target.id;
            let row = position.split("-")[0];
            let col = position.split("-")[1];

            currentRegio.grid[row][col] = this.currentProduct;
            Regios.updateRegio(currentRegio);
            document.getElementById(position).classList.add(this.currentProduct);
        } else
        {
            let productItem = document.getElementsByClassName(this.currentProduct)[0];
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
