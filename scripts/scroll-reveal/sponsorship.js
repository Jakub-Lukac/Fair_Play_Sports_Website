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

/* SUPPORT SECTION */
sr.reveal(".section-heading", { delay: 400, origin: "bottom" });
sr.reveal(".sponsor-card", { delay: 450, origin: "right" });

/* ADVANTAGES */
sr.reveal(".list-of-advantages", { delay: 550, origin: "left" });

/* SPONSORS SECTION */
sr.reveal(".sponsors-image", { delay: 500, origin: "left" });

/* FOOTER */
sr.reveal(".footer-text", { delay: 600, origin: "bottom" });
