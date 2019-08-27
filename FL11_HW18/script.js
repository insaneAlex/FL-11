const root = document.getElementById('root');

let mainWrapper = document.createElement('div');
mainWrapper.className = 'main-wrapper';

let users = [];

const addSpinner = () => {
    let backdrop = document.createElement('div');
    backdrop.id = 'Backdrop';
    let spinner = document.createElement('div');
    spinner.className = 'Spinner';
    backdrop.appendChild(spinner);
    return backdrop;
}

const updateUserOnServer = (user) => {
    var url = `https://jsonplaceholder.typicode.com/users`;

    var json = JSON.stringify(user);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url + `/${user.id}`, true);
    root.appendChild(addSpinner());

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState != 4 && xhr.status != "200") {
            console.error(users);
        }
        document.getElementById('Backdrop').remove();
    }
    xhr.send(json);
}

const deleteUserHandler = (user) => {
    var url = "https://jsonplaceholder.typicode.com/users";
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url + `/${user.id}`, true);
    root.appendChild(addSpinner());
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
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

// YOU ARE ABLE TO EDIT NAME AND EMAIL
const drawUser = userData => {
    let raw = document.createElement('tr');

    let id = document.createElement('td');
    id.textContent = userData.id;

    let name = document.createElement('td');
    name.textContent = userData.name;
    name.addEventListener('click', () => {
        let userName = name.textContent;
        if (name.textContent !== '' && document.getElementsByClassName('inputChangeName').length === 0) {
            name.textContent = null;
        }
        if (document.getElementsByClassName('inputChangeName').length === 0) {
            let input = document.createElement('input');
            let saveBtn = document.createElement('button');

            saveBtn.innerHTML = 'Save';
            saveBtn.addEventListener('click', () => {
                let tableCont = document.getElementById('tbody');
                users[userData.id - 1].name = input.value;

                //Update user on server
                updateUserOnServer(userData);
                tableCont.innerHTML = null;
                tableCont = drawUsers(users);
            })
            input.className = 'inputChangeName';
            input.value = userName;
            name.appendChild(input);
            name.appendChild(saveBtn);
        }
    })

    let email = document.createElement('td');
    email.textContent = userData.email;
    email.addEventListener('click', () => {
        let Email = email.textContent;
        if (email.textContent !== '' && document.getElementsByClassName('inputChangeEmail').length === 0) {
            email.textContent = null;
        }
        if (document.getElementsByClassName('inputChangeEmail').length === 0) {
            let input = document.createElement('input');
            let saveBtn = document.createElement('button');

            saveBtn.innerHTML = 'Save';
            saveBtn.addEventListener('click', () => {
                let tableCont = document.getElementById('tbody');
                users[userData.id - 1].email = input.value;

                tableCont.innerHTML = null;
                tableCont = drawUsers(users);

                //UPDATE ON SERVER
                updateUserOnServer(userData)

            })
            input.className = 'inputChangeEmail';
            input.value = Email;
            email.appendChild(input);
            email.appendChild(saveBtn);
        }
    })

    let deleteBtn = document.createElement('td');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'delete-button';
    deleteBtn.addEventListener('click', () => {
        users = users.filter(user => user.id !== userData.id);
        deleteUserHandler(userData);
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


const drawUsers = usersData => {
    let users = [...usersData];
    let tbody = document.getElementById('tbody');

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