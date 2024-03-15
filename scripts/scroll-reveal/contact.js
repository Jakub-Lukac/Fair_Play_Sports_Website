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

/* ORGANIZATIONAL TEAM SECTION */
sr.reveal(".section-heading", { delay: 400, origin: "bottom" });
sr.reveal(".team-member-detail-card", { delay: 500, origin: "top" });

/* CONTACT FROM SECTION */
sr.reveal(".contact-us-text", { delay: 450, origin: "left" });
sr.reveal(".form-wrapper", { delay: 500, origin: "right" });

/* GOOGLE MAPS SECTION */
sr.reveal(".map", { delay: 600, origin: "top" });

/* SPONSORS SECTION */
sr.reveal(".sponsors-image", { delay: 500, origin: "left" });

/* FOOTER */
sr.reveal(".footer-text", { delay: 600, origin: "bottom" });
