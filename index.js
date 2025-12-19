// Function to Display Posts
function displayPosts(posts) {
    const postDisplay = document.getElementById('post-list');
    posts.forEach(post => {
        const postElement = document.createElement('li');
        const titleElement = document.createElement('h1');
        const bodyElement = document.createElement('p');

        titleElement.textContent = post.title;
        bodyElement.textContent = post.body;

        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        postDisplay.appendChild(postElement);
    });
}

// Fetch Posts from API
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Initialize Fetching on Page Load
window.addEventListener('DOMContentLoaded', (event) => {
    fetchPosts();
}); 

