//WHEN I view the main content,
//THEN I am presented with a list of blog posts that are pulled from localStorage.

const storedPost = localStorage.getItem('blogPosts');
const posts = JSON.parse(storedPost);


    if (posts) {
        for (i = 0; i < posts.length; i++) {
        const mainContentContainer = document.getElementById('mainContent');
        const postElement = document.createElement('div');
        postElement.setAttribute('class', 'blog');
        postElement.innerHTML = `
            <h2>Title: ${posts[i].title}</h2>
            <p>${posts[i].content}</p>
            <h2>User: ${posts[i].username}</h2>
            `;
        mainContentContainer.appendChild(postElement)
        }
    }









  

 



