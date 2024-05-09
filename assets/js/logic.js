//WHEN I submit the form,
//THEN blog post data is stored to localStorage.

const submitButton = document.querySelector('.submit');

submitButton.addEventListener('submit', function(event) {
    event.preventDefault();

    //form values
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const postData = {
        username: username,
        title: title,
        content: content
    };

    const postDataJSON = JSON.stringify(postData);
    localStorage.setItem('postData', postDataJSON);

    localStorage.setItem('postData', JSON.stringify(postData));
})






  

 



