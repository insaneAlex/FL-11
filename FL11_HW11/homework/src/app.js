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
        if (document.getElementById('maxItemsWarn') !== undefined) {
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
    return note;




}

DOM.addNoteBtn.addEventListener('click', () => {
    rootNode.appendChild(addNote(DOM.input.value));
})





//rootNode.appendChild(statusIco);