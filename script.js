document.addEventListener("DOMContentLoaded", () => {

const slides = document.querySelectorAll(".banner-slide");
const btnNext = document.querySelector(".banner-btn-right");
const btnPrev = document.querySelector(".banner-btn-left");

let current = 0;
let autoPlayInterval;

function showSlide(index) {
slides.forEach(slide => slide.classList.remove("active"));
slides[index].classList.add("active");
}

function nextBanner() {
current = (current + 1) % slides.length;
showSlide(current);
}

function prevBanner() {
current = (current - 1 + slides.length) % slides.length;
showSlide(current);
}

/* ====== EVENTOS======== */
btnNext.addEventListener("click", nextBanner);
btnPrev.addEventListener("click", prevBanner);

/* ===== AUTOPLAY ======== */
function startAutoPlay() {
autoPlayInterval = setInterval(nextBanner, 4000); // troca a cada 4s
}

function stopAutoPlay() {
clearInterval(autoPlayInterval);
}

/* Pausa ao passar o mouse */
const banner = document.querySelector(".banner-container");

banner.addEventListener("mouseenter", stopAutoPlay);
banner.addEventListener("mouseleave", startAutoPlay);

/* ===== INICIALIZAÇÃO ====== */
showSlide(current);
startAutoPlay();

});
