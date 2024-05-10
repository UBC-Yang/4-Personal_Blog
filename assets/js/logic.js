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
            <h3>Title: ${posts[i].title}</h3>
            <p>${posts[i].content}</p>
            <h3>User: ${posts[i].username}</h3>
            `;
        mainContentContainer.appendChild(postElement)
        }
    }









  

 



