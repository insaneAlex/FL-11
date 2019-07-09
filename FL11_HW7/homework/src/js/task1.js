const email = prompt('Enter your e-mail:', '');
const emailMinLength = 6;
const passMinLength = 5;
let pass = null;
let newPass = null;

const loginData = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}

if (email === null || email === '') {
    console.log('Canceled!');
} else if (email.length < passMinLength) {
    console.log(`I don't know any emails having name length less than ${emailMinLength} symbols!`)
} else if (email in loginData) {
    pass = prompt('Enter password: ');
    if (pass === loginData[email]) {
        if (confirm('Do you want to change the password?')) {
            pass = prompt('Enter old password: ');
            if (pass === loginData[email]) {
                pass = prompt('Enter new password: ');
                if (pass < passMinLength) {
                    alert('It’s too short password. Sorry')
                } else {
                    newPass = prompt('Confirm password: ');
                    if (pass === newPass) {
                        alert('You have successfully changed your password!')
                    } else {
                        alert('You wrote the wrong password')
                    }
                }
            } else {
                alert('You wrote the wrong password')
            }
        } else {
            alert('You have failed the change.')
        }
    } else {
        console.log('Wrong password!');
    }
} else {
    console.log('I don’t know you');
}