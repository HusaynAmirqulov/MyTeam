let modeToggle = document.querySelector(".switch");
let body = document.querySelector("body");

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  setTimeout(function () {
    loadingScreen.classList.add("fade-out");

    setTimeout(function () {
      loadingScreen.style.display = "none";
      mainContent.classList.add("show");
    }, 800);
  }, 3000);
});

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.querySelector(".backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#hamburger");
  const navMenu = document.querySelector(".nav-menus");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
