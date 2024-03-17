const sr = ScrollReveal({
  distance: "40px",
  duration: 2400,
  reset: false,
});

/* HERO SECTION */
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

sr.reveal(".hero-content", { delay: 450, origin: "left" });
sr.reveal(".social-media-btns", { delay: 600, origin: "bottom" });

/* NEWS SECTION */
sr.reveal(".section-heading", { delay: 400, origin: "bottom" });
sr.reveal(".news-card", { delay: 500, origin: "top" });

/* APPLICATION SECTION */
sr.reveal(".application-card", { delay: 450, origin: "right" });

/* SPONSORS SECTION */
sr.reveal(".sponsors-image", { delay: 500, origin: "left" });

/* FOOTER */
sr.reveal(".footer-text", { delay: 600, origin: "bottom" });
