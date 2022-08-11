//function that runs when like button is clicked in single-post.handlebars
//posts via post-routes.js
async function upvoteClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert("You can only vote once per post!");
    }
}

document.querySelector('.like-btn').addEventListener('click', upvoteClickHandler);