//function that refreshes page to dispaly updated comments and likes when homepage or dashboard buttons are clicked in main.handlebars
const pageRefresh = () => {
    window.location.reload();
}

document.querySelector('.refresh').addEventListener('click', pageRefresh);