// --------------------
// INTRO PAGE HANDLING
// --------------------
const introEl = document.getElementById("intro");
const introGif = document.getElementById("introGif");
const mainEl = document.getElementById("main");

if (introEl && introGif) {

  introEl.style.opacity = "0";
  introGif.style.opacity = "0";

  // 1. Fade in after 1 second
  setTimeout(() => {

    introEl.style.transition = "opacity 1s ease";
    introGif.style.transition = "opacity 1s ease";

    introEl.style.opacity = "1";
    introGif.style.opacity = "1";

    // 2. Fade out after 1800 ms
    setTimeout(() => {

      introEl.style.opacity = "0";
      introGif.style.opacity = "0";

      // 3. After fade-out (mobile friendly redirect)
      setTimeout(() => {

        window.location.href = "invite.html";

      }, 1000); // allow fade-out to finish

    }, 1800);

  }, 1000);
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
