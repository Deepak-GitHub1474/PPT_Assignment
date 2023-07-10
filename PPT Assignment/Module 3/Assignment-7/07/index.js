// Get input elements
const titleInput = document.getElementById('title');
const imgURL = document.getElementById('link');
const authorName = document.getElementById('author');
const categoryInput = document.getElementById('category');
const storyInput = document.getElementById('story');

// Get preview elements
const storyTitle = document.getElementById('story-title');
const storyContentCategory = document.getElementById('story-content-category');
const storyContent = document.getElementById('story-content');
const storyAuthor = document.getElementById('story-author');
const storyImage = document.getElementById('story-img');

// Applying event listeners
titleInput.addEventListener('input', updateLive);
imgURL.addEventListener('input', updateLive);
authorName.addEventListener('input', updateLive);
categoryInput.addEventListener('input', updateLive);
storyInput.addEventListener('input', updateLive);

// Update live preview
function updateLive() {
    storyTitle.innerText = titleInput.value;
    storyContentCategory.innerText = categoryInput.value;
    storyContent.innerText = storyInput.value;
    if (authorName.value) {
        storyAuthor.style.display = 'block';
        storyAuthor.innerText = authorName.value;
    } else {
        storyAuthor.style.display = 'none';
    }

    if (imgURL.value) {
        storyImage.src = imgURL.value;
    }
    
}


