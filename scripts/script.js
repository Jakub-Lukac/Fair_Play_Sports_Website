let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-xmark");
  navmenu.classList.toggle("open");
};

