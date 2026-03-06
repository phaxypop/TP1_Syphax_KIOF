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
