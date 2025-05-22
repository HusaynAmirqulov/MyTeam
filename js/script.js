const loading = document.getElementById("loading");
let modeToggle = document.querySelector(".switch");
let body = document.querySelector("body");

$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
});

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
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

setTimeout(() => (loading.style.display = "none"), 3000);

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#hamburger");
  const navMenu = document.querySelector(".nav-menus");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
