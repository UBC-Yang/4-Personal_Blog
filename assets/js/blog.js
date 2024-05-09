const themeSwitcher = document.querySelector('.theme-switcher');
const theme = document.querySelector('.theme');
const back = document.querySelector('.back')

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

//Go back to form page
const goBack = function(event) {
    event.preventDefault();

    window.location.href = 'index.html';
}

back.addEventListener('click', goBack);

//WHEN I view the main content,
//THEN I am presented with a list of blog posts that are pulled from localStorage.

