// --------------------
// INTRO PAGE HANDLING
// --------------------
const introEl = document.getElementById("intro");
const introGif = document.getElementById("introGif");
const titleEl = document.getElementById("introTitle");

if (introEl && introGif && titleEl) {

  // Preload invite page
  fetch("invite.html", { cache: "force-cache" });
  
  // Initially: show text, hide GIF (don't load GIF yet)
  introEl.style.opacity = "0";
  introGif.style.opacity = "0";
  titleEl.style.opacity = "1";
  titleEl.style.transition = "opacity 0.5s ease";
  introEl.style.transition = "opacity 0.2s ease";
  introGif.style.transition = "opacity 0.5s ease";

  introGif.removeAttribute("src");

  // 1. Show text for 1 second
  setTimeout(() => {
    
    // Fade out text
    titleEl.style.opacity = "0";
    
    // After text fades out, load and show GIF (starts from frame 1)
    setTimeout(() => {
      
      // Load the GIF source NOW - this ensures it starts from frame 1
      introGif.src = "intro.gif";
      
      introEl.style.opacity = "1";
      introGif.style.opacity = "1";
      
      // 2. After GIF plays for 1800ms, transition to invite page
      setTimeout(() => {
        
        // Fade out GIF
        introEl.style.opacity = "0";
        introGif.style.opacity = "0";
        
        // 3. After fade-out completes, redirect
        setTimeout(() => {
          window.location.href = "invite.html";
        }, 500); // allow fade-out to finish
        
      }, 3000); // GIF plays for 3200ms
      
    }, 500); // text fade-out duration
    
  }, 1000); // text shows for 1 second
}


// -------------------------
// INVITATION PAGE HANDLING
// -------------------------
const qrImage = document.getElementById("qrImage");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

if (qrImage && modal && modalImg && closeBtn) {

  qrImage.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = qrImage.src;
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}

const toggleBtn = document.getElementById("toggleQr");
const qrWrapper = document.getElementById("qrWrapper");

if (toggleBtn && qrWrapper) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = qrWrapper.classList.toggle("open");
    toggleBtn.textContent = isOpen
      ? "Hide FPS QR Code"
      : "Show FPS QR Code";
  });
}