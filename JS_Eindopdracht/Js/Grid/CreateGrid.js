// =========== Create Grid ============= //
export const grid = document.getElementById("grid");


export function createGrid(array){
    let rows = 0;
    let cols = 0;
    for(let i = 0; i < array.length; i++){
        rows += (1);
        for(let j =0; j < array[i].length; j++){
            cols += (1);
        }
    }
    grid.style.setProperty('--grid-rows', cols);
    grid.style.setProperty('--grid-cols', rows);
    let count = 0;
    for (let c = 0; c < rows; c++) {
        for(let d = 0; d < cols/15; d++){
            let cell = document.createElement("div");
            if(array[c][d].valueOf() === "-"){
                grid.appendChild(cell).className = "grid-item empty";
                grid.appendChild(cell).style.backgroundColor = "lightgray";
            }
            if(array[c][d].valueOf() === "@"){
                grid.appendChild(cell).className = "grid-item wall";
                grid.appendChild(cell).style.backgroundColor = "black";
            }
            if(array[c][d].valueOf() === "|"){
                grid.appendChild(cell).className = "grid-item floor";
                grid.appendChild(cell).style.backgroundColor = "darkgray";
            }
            grid.appendChild(cell).id = (c + "-" + d);
            grid.appendChild(cell).style.minWidth = '62px';
            grid.appendChild(cell).style.minHeight = '56px';
            grid.appendChild(cell).style.maxWidth = '62px';
            grid.appendChild(cell).style.maxHeight = '56px';
            count++;
        }
    }
}
