const navSlide = () => {
  const burger = document.querySelector(".header_response-menu");
  const nav = document.querySelector(".header_links");
  const navLinks = document.querySelectorAll(".header_links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
