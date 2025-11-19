// Your GitHub raw image URL
const githubImageURL = "https://github.com/Eranio-bit/WeddingGift/blob/main/image.png?raw=true";

// Your text
const text = "Hello! This image is loaded from GitHub.";

document.getElementById("title").textContent = text;
document.getElementById("image").src = githubImageURL;
