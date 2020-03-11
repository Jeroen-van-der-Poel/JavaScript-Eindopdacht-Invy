// =========== drag and drop ============= //
const empties = document.querySelectorAll('.empty');
const draggable = document.querySelector('.draggable-product');

let el = null;

draggable.addEventListener('dragstart', dragStart);
draggable.addEventListener('dragend', dragEnd);

// drag
function dragStart() {
    this.className += ' hold';
    draggable.style.position = 'absolute';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'grid-item fill'
}

//empties
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    if(e.target.classList.contains('empty')){
        e.target.style = 'background-color: green';
    }
}

function dragLeave(e) {
    e.target.style = 'background-color: white';
}

function dragDrop(e) {
    if(this.className === 'grid-item empty'){
        let html = document.querySelector('.draggable-product').id;
        this.className = 'grid-item fill';
        this.append(draggable);
        this.innerHTML = html;
        e.target.style = 'background-color: gray';
    }
}