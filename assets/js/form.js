const themeSwitcher = document.querySelector('.theme-switcher');
const theme = document.querySelector('.theme');
const form = document.querySelector('.form');

//WHEN I click the light mode/dark mode toggle,
//THEN the page content's styles update to reflect the selection.

let mode = 'light';

themeSwitcher.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        theme.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        theme.setAttribute('class', 'light');
    }
});

//WHEN I enter try to submit a form without a username, title, or content,
//THEN I am presented with a message that prompts me to complete the form.

const formSubmission = function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username === '' || title === '' || content === '') {
        errorMessage();
    } else {
        window.location.href = 'blog.html';
    }

    const errorMessage = 'Please fill in this field';
}

form.addEventListener('submit', formSubmission);