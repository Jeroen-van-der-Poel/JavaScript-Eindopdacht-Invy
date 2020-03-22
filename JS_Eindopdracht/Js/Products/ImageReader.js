import { item ,itemNumber } from "../DragAndDrop/DragDrop";
import { currentRegio } from "../App";
import { Regios } from "../Initialize/Regio";
import { Canvas} from "./Canvas";

const canvas = document.getElementById("ImageCanvas");

const canvasClass = new Canvas();

export class ImageReader {
    LoadPicture(){
        try{
            if(item.image != ""){
                let img = new Image();
                img.onload = function(){
                    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
                    let sizer = Math.min((340/img.width),(400/img.height));
                    canvas.width = 340;
                    canvas.height = 400;
                    canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width*sizer, img.height*sizer);
                    canvasClass.InitDrawing();
                };
                img.src = item.image;
            }else{
                canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            }
        }catch (e) {
            
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

                    canvas.getContext("2d").drawImage(buffer, 0, 0, buffer.width, buffer.height, 0, 0, buffer.width*sizer,  buffer.height*sizer);
                    try{
                        item.image = canvas.toDataURL("image/png");
                        currentRegio.items[itemNumber] = item;
                        Regios.updateRegio(currentRegio);
                    } catch (e) {

                    }
                }
            }
        })(newFile);
        fReader.readAsDataURL(newFile);
    }

}