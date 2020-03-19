const canvas = document.getElementById("ImageCanvas");

export class ImageReader {

    LoadImage(){

    }

    clearInputFile(f) {
        if (f.value) {
            try {
                f.value = ''; //for IE11, latest Chrome/Firefox/Opera...
            } catch (err) {
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

        })
    }
}