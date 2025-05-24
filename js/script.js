window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  // 3 sekunddan keyin loading screen ni yashirish
  setTimeout(function () {
    loadingScreen.classList.add("fade-out");

    // Loading screen yo'qolgandan keyin main content ni ko'rsatish
    setTimeout(function () {
      loadingScreen.style.display = "none";
      mainContent.classList.add("show");
    }, 800); // fade-out animatsiyasi tugashini kutish
  }, 3000); // 3 sekund
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // Add your navigation logic here
  });
});

// Button hover effects
document.querySelector(".nav-btn").addEventListener("mouseenter", function () {
  this.style.transform = "translateY(-2px)";
});

document.querySelector(".nav-btn").addEventListener("mouseleave", function () {
  this.style.transform = "translateY(0)";
});
