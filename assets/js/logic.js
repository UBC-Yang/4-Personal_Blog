//WHEN I view the main content,
//THEN I am presented with a list of blog posts that are pulled from localStorage.

const mainContent = document.querySelector('.mainContent')

const displayContent = function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

    const blogPostContainer = document.getElementById('mainContent');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('blogPosts')) {
            const post = JSON.parse(localStorage.getItem(ket));

            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.username}</h2>
                <h2>${post.title}</h2>
                <p>${post.content},/h2>
            `;
            blogPostContainer.appendChild(postElement);
        }
    }}









  

 



