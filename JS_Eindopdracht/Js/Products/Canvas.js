import { item ,itemNumber } from "../DragAndDrop/DragDrop";
import { currentRegio } from "../App";
import { Regios } from "../Initialize/Regio";

const canvas = document.getElementById("ImageCanvas");
const ctx = canvas.getContext("2d");
let prevX = 0;
let currX = 0;
let prevY = 0;
let currY = 0;
let drawActive = false;

export class Canvas{

    InitDrawing() {
        canvas.addEventListener("mousemove", e =>{
            if(drawActive){
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.getBoundingClientRect().left;
                currY = e.clientY - canvas.getBoundingClientRect().top;
                this.Draw();
            }
        });
        canvas.addEventListener("mousedown", e => {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.getBoundingClientRect().left;
            currY = e.clientY - canvas.getBoundingClientRect().top;
            drawActive = true;
        });
        canvas.addEventListener("mouseup", this.MouseUp, false);
        currX = 0;
        currY = 0;
        prevX = 0;
        prevY = 0;
    }

    MouseUp() {
        drawActive = false;
    }

    Draw() {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
        item.image = canvas.toDataURL("image/png");
        currentRegio.items[itemNumber] = item;
        Regios.updateRegio(currentRegio);
    }

}