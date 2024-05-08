//Local storage
const entry = function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const postData = {
        username: username,
        title: title,
        content: content
    };

    const postDataJSON = JSON.stringify(postData);

    localStorage.setItem('blogPost', postDataJSON);

}