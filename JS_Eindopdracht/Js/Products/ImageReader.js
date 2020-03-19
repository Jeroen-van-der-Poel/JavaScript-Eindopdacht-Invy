import { item} from "../DragAndDrop/DragDrop";
import { currentRegio } from "../App";
import { Regios } from "../Initialize/Regio";

const canvas = document.getElementById("ImageCanvas");
const ctx = canvas.getContext("2d");
let prevX = 0;
let currX = 0;
let prevY = 0;
let currY = 0;
let drawActive = false;

export class ImageReader {

    clearInputFile(f) {
        if (f.value) {
            try {
                f.value = '';
            } catch (err) {
                alert("Sorry, er is iets mis gegaan!")
            }
        }
    }

    LoadPicture(){
        if(item.image != ""){
            let img = new Image();
            img.onload = function(){
                canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
                let sizer = Math.min((340/img.width),(400/img.height));
                canvas.width = 340;
                canvas.height = 400;
                canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width*sizer, img.height*sizer);
                this.InitDrawing();
            };
            img.src = item.image;
        }else{

        }
    }

    ReadFile(e) {
        let newFile = e.target.files[0];
        if (!newFile.type.match('image.*')) {
            window.alert("gekozen bestand is niet van het juiste type!");
            return;
        }
        let fReader = new FileReader();
        fReader.onload = (function () {
            return function (e) {
                canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
                let buffer = new Image();
                buffer.src = e.target.result;
                buffer.onload = function(){
                    let sizer = Math.min((340/buffer.width),(400/buffer.height));
                    canvas.width = 340;
                    canvas.height = 400;

                    canvas.getContext("2d")
                        .drawImage(buffer, 0, 0, buffer.width, buffer.height, 0, 0, buffer.width*sizer,  buffer.height*sizer);
                    this.InitDrawing();
                    this.SaveImage();
                    this.LoadPicture();
                }
            }
        })(newFile);
        fReader.readAsDataURL(newFile);
    }

    // =========== Canvas drawing ============= //
    InitDrawing(){
        canvas.addEventListener("mousemove", function(e){this.MouseMove(e)}, false);
        canvas.addEventListener("mousedown", function(e){this.MouseDown(e)}, false);
        canvas.addEventListener("mouseup", this.MouseUp, false);
        currX = 0;
        currY = 0;
        prevX = 0;
        prevY = 0;
    }

    MouseMove(e){
        if(drawActive){
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.getBoundingClientRect().left;
            currY = e.clientY - canvas.getBoundingClientRect().top;
            this.Draw();
        }
    }

    Draw(){
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
        this.SaveImage();
    }

    MouseDown(e){
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.getBoundingClientRect().left;
        currY = e.clientY - canvas.getBoundingClientRect().top;
        drawActive = true;
    }

    MouseUp(){
        drawActive = false;
    }

    SaveImage(){
        item.image = canvas.toDataURL("image/png");
        //currentRegio.items[productCode] = item;
        Regios.updateRegio(currentRegio);
    }
}