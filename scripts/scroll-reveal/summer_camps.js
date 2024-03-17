const sr = ScrollReveal({
  distance: "40px",
  duration: 2400,
  reset: false,
});

/* NAVBAR */
sr.reveal(".logoImage", { delay: 300, origin: "bottom" });
function revealElements() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1050) {
    sr.reveal(".left", { delay: 400, origin: "left" });
    sr.reveal(".right", { delay: 400, origin: "right" });
  } else {
    // if we have hamburger menu, we do not want to have the loading animation
    // as the elements wont display properly
    const leftElement = document.querySelector(".left");
    const rightElement = document.querySelector(".right");

    if (leftElement) {
      leftElement.classList.remove("load-hidden");
    }

    if (rightElement) {
      rightElement.classList.remove("load-hidden");
    }
  }
}

// Call revealElements initially to handle the initial page load
revealElements();

// Call revealElements whenever the window is resized
window.addEventListener("resize", revealElements);
/*sr.reveal(".left", { delay: 400, origin: "left" });
sr.reveal(".right", { delay: 400, origin: "right" });*/
sr.reveal(".social-media-btns", { delay: 600, origin: "bottom" });

/* FLOORBALL CAMP */
sr.reveal(".section-heading", { delay: 400, origin: "bottom" });
sr.reveal(".camp-text", { delay: 450, origin: "left" });

/* PREVIOUS YEARS SECTION */
sr.reveal(".picture-card", { delay: 400, origin: "bottom" });

/* SPONSORS SECTION */
sr.reveal(".sponsors-image", { delay: 500, origin: "left" });

/* FOOTER */
sr.reveal(".footer-text", { delay: 600, origin: "bottom" });
