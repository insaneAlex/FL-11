const root = document.getElementById('root');

const mainWrapper = document.createElement('div');
mainWrapper.className = 'main-wrapper';

let users = [];

const addSpinner = () => {
    const backdrop = document.createElement('div');
    backdrop.id = 'Backdrop';
    const spinner = document.createElement('div');
    spinner.className = 'Spinner';
    backdrop.appendChild(spinner);
    return backdrop;
}

const updateUserOnServer = (user) => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const json = JSON.stringify(user);
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url + `/${user.id}`, true);
    root.appendChild(addSpinner());
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        const users = JSON.parse(xhr.responseText);
        if (xhr.readyState != 4 && xhr.status != "200") {
            console.error(users);
        }
        document.getElementById('Backdrop').remove();
    }
    xhr.send(json);
}

const deleteUserHandler = (user) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", url + `/${user.id}`, true);
    root.appendChild(addSpinner());
    xhr.onload = function () {
        const users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            document.getElementById('Backdrop').remove();
            console.table(users);
        } else {
            document.getElementById('Backdrop').remove();
            console.error(users);
        }
    }
    xhr.send(null);
}

const editField = (userParam, field, users) => {
    const fieldValue = field.textContent;
    if (field.textContent !== '' && document.getElementsByClassName('inputChangeField').length === 0) {
        field.textContent = null;
    }
    if (document.getElementsByClassName('inputChangeField').length === 0) {
        const input = document.createElement('input');
        const saveBtn = document.createElement('button');
        saveBtn.innerHTML = 'Save';
        saveBtn.addEventListener('click', () => {
            let tableCont = document.getElementById('tbody');
            for (let user of users) {
                if (user.id === userParam.id) {
                    if (field.className === 'name') {
                        user.name = input.value;
                    } else if (field.className === 'email') {
                        user.email = input.value;
                    }
                }
            }
            updateUserOnServer(userParam);
            tableCont.innerHTML = null;
            tableCont = drawUsers(users);
        })
        input.className = 'inputChangeField';
        input.value = fieldValue;
        field.appendChild(input);
        field.appendChild(saveBtn);
    }
}

const drawUser = userParam => {
    const raw = document.createElement('tr');
    raw.className = 'raw';

    const id = document.createElement('td');
    id.className = 'id';
    id.textContent = userParam.id;

    const name = document.createElement('td');
    name.textContent = userParam.name;
    name.className = 'name';
    name.addEventListener('click', () => {
        editField(userParam, name, users);
    })
    const email = document.createElement('td');
    email.className = 'email';
    email.textContent = userParam.email;
    email.addEventListener('click', () => {
        editField(userParam, email, users);
    })
    const deleteBtn = document.createElement('td');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'delete-button';
    deleteBtn.addEventListener('click', () => {
        users = users.filter(user => user.id !== userParam.id);
        deleteUserHandler(userParam);
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = null;
        tbody = drawUsers(users);
    });
    raw.appendChild(id);
    raw.appendChild(name);
    raw.appendChild(email);
    raw.appendChild(deleteBtn);
    return raw;
}

const drawUsers = userParam => {
    const users = [...userParam];
    const tbody = document.getElementById('tbody');
    for (let user of users) {
        tbody.appendChild(drawUser(user));
    }
    return tbody;
}

var xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users`, true);
root.appendChild(addSpinner());
xhr.onload = function (e) {
    if (xhr.status === 200) {
        document.getElementById('Backdrop').remove();
        users = JSON.parse(this.response);
        document.getElementById('users-container').appendChild(drawUsers(users));
    } else {
        console.error(xhr.statusText);
    }
};
xhr.onerror = function (e) {
    console.error(xhr.statusText);
};
xhr.send(null);