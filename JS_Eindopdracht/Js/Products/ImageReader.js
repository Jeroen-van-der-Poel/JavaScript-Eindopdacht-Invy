const canvas = document.getElementById("ImageCanvas");

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
                    let sizer = Math.min((500/buffer.width),(500/buffer.height));
                    canvas.width = 500;
                    canvas.height = 500;

                    canvas.getContext("2d")
                        .drawImage(buffer, 0, 0, buffer.width, buffer.height, 0, 0, buffer.width*sizer,  buffer.height*sizer);
                }
            }
        })
    }
}