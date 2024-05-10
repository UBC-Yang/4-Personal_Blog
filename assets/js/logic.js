//WHEN I view the main content,
//THEN I am presented with a list of blog posts that are pulled from localStorage.

const storedPost = localStorage.getItem('blogPosts');

for (i = 0; i < storedPost.length; i++) {
    if (storedPost) {
        const post = JSON.parse(storedPost);
        const mainContentContainer = document.getElementById('mainContent');
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${post.username}</h2>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            `;
        mainContentContainer.appendChild(postElement)
    }
}

console.log(storedPost)








  

 



