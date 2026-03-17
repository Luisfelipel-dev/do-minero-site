document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".banner-slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");
  }

  window.nextBanner = function () {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  window.prevBanner = function () {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  showSlide(current);

});