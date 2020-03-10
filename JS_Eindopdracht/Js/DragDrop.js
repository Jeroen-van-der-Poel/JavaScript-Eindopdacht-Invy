// =========== drag and drop ============= //
const empties = document.querySelectorAll('.empty');
const draggable = document.querySelector('.draggable-product');

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
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'grid-item empty';
}

function dragDrop() {
    if(this.className == 'grid-item empty' || this.className == 'grid-item empty hovered'){
        let html = document.querySelector('.draggable-product').innerHTML;
        this.className = 'grid-item fill';
        this.append(draggable);
        this.innerHTML = html;
    }
}