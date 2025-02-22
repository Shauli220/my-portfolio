document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn-mobile");
  const menuPopup = document.querySelector(".pop-up");

  menuBtn.addEventListener("click", function () {
    menuPopup.classList.toggle("active"); // Toggle menu visibility
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!menuBtn.contains(event.target) && !menuPopup.contains(event.target)) {
      menuPopup.classList.remove("active");
    }
  });
});

document.querySelectorAll(".menu").forEach((menu) => {
  menu.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust -50px if needed
        behavior: "smooth",
      });
    }
  });
});
