//function that runs when form submit btn is clicked in login-form in login-handlebars
//it takes user input and posts it via user-routes.js
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('success');
            alert("You're signed in!")
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}


//function that runs when form submit btn is clicked in signup-form in login-handlebars
//it takes user input and posts it via user-routes.js
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        // check the response status
        if (response.ok) {
            console.log('success');
            alert("You're signed in!")
            document.location.replace('/');
        } else {
            alert("User already exists.");
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);