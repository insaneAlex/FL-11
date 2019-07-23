let rootNode = document.getElementById('content');
document.getElementById('addNoteBtn').disabled = 'true';
let notesAmount = 0;
const MAX_NOTES_AMOUNT = 10;
const DOM = {
    input: document.getElementById('noteText'),
    addNoteIco: document.getElementById('addNote'),
    addNoteBtn: document.getElementById('addNoteBtn')
}
const taskDone = el => {
    el.innerHTML = 'check_box';
}
let dragSrcEl = null;

function handleDragStart(e) {
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter() {
    this.classList.add('over');
}

function handleDragLeave() {
    this.classList.remove('over');
}

function handleDrop(e) {
    // this/e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }

    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl !== this) {
        // Set the source column's HTML to the HTML of the columnwe dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}


DOM.input.addEventListener('input', () => {
    if (DOM.input.value.length > 0 && notesAmount < MAX_NOTES_AMOUNT) {
        DOM.addNoteBtn.disabled = false;
    } else {
        DOM.addNoteBtn.disabled = true;
    }
})
const addNote = value => {
    let note = document.createElement('div');
    note.setAttribute('class', 'note');
    note.setAttribute('draggable', 'true');
    let leftCont = document.createElement('div');
    leftCont.setAttribute('class', 'leftCont');
    let rightCont = document.createElement('div');
    rightCont.setAttribute('class', 'rightCont');
    let statusIco = document.createElement('i');
    statusIco.setAttribute('class', 'material-icons');
    statusIco.innerHTML = 'check_box_outline_blank';
    statusIco.addEventListener('click', () => {
        taskDone(statusIco)
    })
    let text = document.createElement('p');
    text.setAttribute('class', 'input-text');
    text.innerHTML = value;
    let editIco = document.createElement('i');
    editIco.setAttribute('class', 'material-icons');
    editIco.innerHTML = 'edit';
    editIco.addEventListener('click', () => {
        if (document.getElementById('editField') === null) {
            let editField = document.createElement('div');
            editField.setAttribute('id', 'editField');
            let editInput = document.createElement('input');
            let saveBtn = document.createElement('i');
            saveBtn.setAttribute('class', 'material-icons editBtn');
            saveBtn.innerHTML = 'save';
            saveBtn.addEventListener('click', () => {
                text.innerHTML = editInput.value;
                (() => {
                    editField.remove();
                })()
            })
            editField.appendChild(editInput);
            editField.appendChild(saveBtn);
            note.insertBefore(editField, rightCont);
        }
    })
    leftCont.appendChild(statusIco);
    leftCont.appendChild(text);
    leftCont.appendChild(editIco);

    let deleteIco = document.createElement('i');
    deleteIco.setAttribute('class', 'material-icons');
    deleteIco.innerHTML = 'delete';
    deleteIco.addEventListener('click', () => {
        DOM.addNoteBtn.disabled = false;
        notesAmount--;
        note.remove();
        if (document.getElementById('maxItemsWarn') !== null) {
            document.getElementById('maxItemsWarn').remove();
        }
    })
    rightCont.appendChild(deleteIco);

    note.appendChild(leftCont);
    note.appendChild(rightCont);
    notesAmount++;
    if (notesAmount === MAX_NOTES_AMOUNT) {
        let warn = document.createElement('p');
        warn.setAttribute('id', 'maxItemsWarn');
        warn.innerHTML = 'Max item per list is 10';
        DOM.addNoteBtn.disabled = true;
        document.getElementById('headerText').appendChild(warn);
    }

    let cols = document.querySelectorAll('#content .note');
    [].forEach.call(cols, function (col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
    });


    return note;
}



DOM.addNoteBtn.addEventListener('click', () => {
    rootNode.appendChild(addNote(DOM.input.value));
})