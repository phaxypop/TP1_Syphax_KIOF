let index = 0;

function moveSlide(direction) {
  const track = document.querySelector(".carousel-track");
  const albums = document.querySelectorAll(".album");

  index += direction;

  if (index < 0) {
    index = albums.length - 1;
  }

  if (index >= albums.length) {
    index = 0;
  }

  track.style.transform = "translateX(-" + index * 100 + "%)";
}
//////////////////////////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls (optional)
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
//////////////////////////////////////////////////////////////////
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
