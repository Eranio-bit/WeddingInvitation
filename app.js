// Your GitHub raw image URL
const githubImageURL = "https://raw.githubusercontent.com/Eranio-bit/WeddingGift/main/image.png";

// Your text
const text = "Hello! This image is loaded from GitHub.";

document.getElementById("title").textContent = text;
document.getElementById("image").src = githubImageURL;
