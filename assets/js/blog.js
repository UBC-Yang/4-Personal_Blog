const themeSwitcher = document.querySelector('.theme-switcher');
const theme = document.querySelector('.theme');
const back = document.querySelector('.back')

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

//WHEN I click the "Back" button,
//THEN I am redirected back to the landing page where I can input more blog entries.

const goBack = function(event) {
    event.preventDefault();

    window.location.href = 'index.html';
}

back.addEventListener('click', goBack);

//WHEN I view the main content,
//THEN I am presented with a list of blog posts that are pulled from localStorage.

const displayBlogPosts = function() {
    const blogPosts = JSON.parse(localStorage.getItem('postData'))
}

document.addEventListener('DOMContentLoaded', function() {
    const postData = JSON.parse(localStorage.getItem('postData'));

    const displayBlogPosts = document.getElementsByClassName('postData');
    displayBlogPosts.innerHTML = `
    ${postData.username}
    ${postData.title}
    ${postData.content}
    `;
})