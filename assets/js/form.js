const themeSwitcher = document.querySelector('.theme-switcher');
const theme = document.querySelector('.theme');
const form = document.querySelector('.form');

let mode = 'light';
//Click to switch theme
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

//Validate form
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

    const errorMessage = 'Please complete all fields';
}

form.addEventListener('submit', formSubmission);