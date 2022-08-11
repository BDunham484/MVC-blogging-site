//function that runs when #logout button is clikced in main.handlebars
//posts via user.routes.js
async function logout() {
        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });
    

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert("You're not logged in!.");
    }
}

document.querySelector('#logout').addEventListener('click', logout);