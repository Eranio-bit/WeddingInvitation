if (introEl && introGif && titleEl) {

  // 🔥 Preload invite page for instant transition
  fetch("invite.html", { cache: "force-cache" });

  // Initial state
  introEl.style.opacity = "0";
  introGif.style.opacity = "0";
  titleEl.style.opacity = "1";

  titleEl.style.transition = "opacity 0.5s ease";
  introEl.style.transition = "opacity 0.5s ease";
  introGif.style.transition = "opacity 0.5s ease";

  // Prevent browser from preloading the GIF
  introGif.removeAttribute("src");
  // 1. Show text for 1 second
  setTimeout(() => {

    // Fade out text
    titleEl.style.opacity = "0";

    // 2. After text fades out
    setTimeout(() => {

      // Force GIF to start from frame 1
      introGif.src = "intro.gif";

      // 🔒 WAIT UNTIL GIF IS FULLY LOADED
      const startGifSequence = () => {

        // Ensure first frame is painted
        requestAnimationFrame(() => {

          introEl.style.opacity = "1";
          introGif.style.opacity = "1";

          // 3. Let GIF play for 1800ms
          setTimeout(() => {

            // Fade out GIF
            introEl.style.opacity = "0";
            introGif.style.opacity = "0";

            // 4. Redirect after fade-out
            setTimeout(() => {
              window.location.href = "invite.html";
            }, 500);

          }, 1800);
        });
      };

      if (intr
