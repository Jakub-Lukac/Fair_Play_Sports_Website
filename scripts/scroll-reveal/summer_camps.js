const sr = ScrollReveal({
  distance: "40px",
  duration: 2400,
  reset: false,
});

/* NAVBAR */
sr.reveal(".logoImage", { delay: 300, origin: "bottom" });
sr.reveal(".left", { delay: 400, origin: "left" });
sr.reveal(".right", { delay: 400, origin: "right" });
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

