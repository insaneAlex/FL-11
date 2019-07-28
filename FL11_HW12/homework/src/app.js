const rootNode = document.getElementById('root');

window.location.hash = '';
console.log(window.location.hash)
let todoItems = [
    { isDone: false, id: 1, description: 'Todo 1' },
    { isDone: false, id: 2, description: 'Todo 12' },
    { isDone: true, id: 3, description: 'Todo 123' },
    { isDone: false, id: 4, description: 'Todo 1234' }
];
//Loading main page:

const mainPageDrawer = todoItems => {
    const mainSection = document.createElement('div');
    mainSection.className = 'mainSection';

    const mainSectionHeader = document.createElement('h1');
    mainSectionHeader.innerHTML = 'Simple TODO application';

    const addItemButton = document.createElement('button');
    addItemButton.className = 'addItemButton';
    addItemButton.innerHTML = 'Add new task';
    addItemButton.addEventListener('click', () => {
        rootNode.replaceChild(addPageDrawer(), rootNode.firstChild);
    });

    let listSection = document.createElement('div');
    listSection.id = 'list';


    if (todoItems.length === 0) {
        let message = document.createElement('p');
        message.className = 'emptyListMessage';
        message.innerHTML = 'TODO is empty';
        listSection.appendChild(message);
    } else {
        listSection = document.createElement('div');
        listSection.appendChild(drawAllItems(todoItems))
    }

    mainSection.appendChild(mainSectionHeader);
    mainSection.appendChild(addItemButton);
    mainSection.appendChild(listSection);

    return mainSection;
}

//Draw 1 item:
const drawItem = itemObj => {
    const item = document.createElement('div');
    item.className = 'item';

    const itemCheckedIco = document.createElement('div');

    if (itemObj.isDone) {
        itemCheckedIco.className = 'itemUncheckedIco';
        item.className = 'done item';
    } else {
        itemCheckedIco.className = 'itemCheckedIco';
    }

    itemCheckedIco.addEventListener('click', () => {
        checkItem(itemObj)
    })

    const itemDescription = document.createElement('p');
    itemDescription.className = 'itemDescription';
    itemDescription.innerHTML = itemObj.description;
    if (!itemObj.isDone) {
        itemDescription.addEventListener('click', () => {
            modifyPageDrawer(itemObj)
        })

        //return alert
    }


    const deleteItemIco = document.createElement('div');
    deleteItemIco.className = 'deleteItemIco';
    deleteItemIco.addEventListener('click', () => {
        removeItemHandler(itemObj.id)
    })

    item.appendChild(itemCheckedIco);
    item.appendChild(itemDescription);
    item.appendChild(deleteItemIco);

    return item;
}


// Draw all items:
const drawAllItems = items => {
    const itemsList = document.createElement('div');
    itemsList.id = 'list';
    for (let item of items) {
        if (!item.isDone) {
            itemsList.appendChild(drawItem(item));
        }
    }
    for (let item of items) {
        if (item.isDone) {
            itemsList.appendChild(drawItem(item));
        }
    }
    return itemsList;
}

// Check item as done
const checkItem = itemObj => {
    itemObj.isDone = !itemObj.isDone;
    rootNode.replaceChild(mainPageDrawer(todoItems), rootNode.firstChild);
}

// Remove item from list 
const removeItemHandler = itemID => {
    let updatedItemsList = todoItems.filter(todoItem => todoItem.id !== itemID);

    todoItems = updatedItemsList;
    rootNode.replaceChild(mainPageDrawer(todoItems), rootNode.firstChild);
}


// Add new Task page drawer:

const addPageDrawer = () => {
    window.location.hash = 'add';
    const addSection = document.createElement('div');
    addSection.className = 'addSection';

    const addSectionHeader = document.createElement('h1');
    addSectionHeader.innerHTML = 'Add task';

    const inputDescription = document.createElement('input');
    inputDescription.className = 'input';

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'buttonsWrapper';

    const cancelModifyBtn = document.createElement('button');
    cancelModifyBtn.innerHTML = 'Cancel';
    cancelModifyBtn.addEventListener('click', () => {
        window.location.hash = '';
    })

    const saveChangesBtn = document.createElement('button');
    saveChangesBtn.innerHTML = 'Save changes';
    saveChangesBtn.addEventListener('click', () => {
        addItemHandler(inputDescription.value);
    })

    buttonsWrapper.appendChild(cancelModifyBtn);
    buttonsWrapper.appendChild(saveChangesBtn);

    addSection.appendChild(addSectionHeader);
    addSection.appendChild(inputDescription);
    addSection.appendChild(buttonsWrapper);

    return addSection;
}

// add item handler:
const addItemHandler = (value) => {
    todoItems.push({
        isDone: false,
        id: todoItems.length + 1,
        description: value
    })

    window.location.hash = '';
}


// Modify task page drawerЖ

const modifyPageDrawer = itemObj => {
    window.location.hash = 'modify';
    const modifySection = document.createElement('div');
    modifySection.className = 'modifySection';

    const modifySectionHeader = document.createElement('h1');
    modifySectionHeader.innerHTML = 'Modify task';

    const inputModify = document.createElement('input');
    inputModify.className = 'input';
    inputModify.setAttribute('value', `${itemObj.description}`)

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'buttonsWrapper';

    const cancelModifyBtn = document.createElement('button');
    cancelModifyBtn.innerHTML = 'Cancel';
    cancelModifyBtn.addEventListener('click', () => {
        window.location.hash = '';
    })

    const saveChangesBtn = document.createElement('button');
    saveChangesBtn.innerHTML = 'Save changes';
    saveChangesBtn.addEventListener('click', () => {
        itemObj.description = inputModify.value;
        window.location.hash = '';
    })

    buttonsWrapper.appendChild(cancelModifyBtn);
    buttonsWrapper.appendChild(saveChangesBtn);

    modifySection.appendChild(modifySectionHeader);
    modifySection.appendChild(inputModify);

    modifySection.appendChild(buttonsWrapper);

    rootNode.replaceChild(modifySection, rootNode.firstChild);

}

// window.onhashchange = () => {
//     if (location.hash === '') {
//         mainContainer.replaceChild(page1, mainContainer.firstChild);
//         mainCon();
//     }
// }

const currentPage = mainPageDrawer(todoItems);

function locationHashChanged() {
    if (location.hash === '') {
        if (rootNode.firstChild) {
            rootNode.replaceChild(mainPageDrawer(todoItems), rootNode.firstChild);
        } else {
            rootNode.appendChild(currentPage);
        }

    } else if (location.hash === '#add') {
        rootNode.replaceChild(addPageDrawer(), rootNode.firstChild);
    }
}


window.onhashchange = locationHashChanged;






rootNode.appendChild(currentPage);