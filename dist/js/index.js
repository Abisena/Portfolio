// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixed = header.offsetTop;

  if (window.pageYOffset > fixed) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hum
const hum = document.querySelector("#hum");
const nav = document.querySelector("#nav_menu");

hum.addEventListener("click", function () {
  hum.classList.toggle("hum-active");
  nav.classList.toggle("hidden");
});
