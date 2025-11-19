// Your GitHub raw image URL
const githubImageURL = "https://raw.githubusercontent.com/USERNAME/REPO/main/images/photo.jpg";

// Your text
const text = "Hello! This image is loaded from GitHub.";

document.getElementById("title").textContent = text;
document.getElementById("image").src = githubImageURL;
