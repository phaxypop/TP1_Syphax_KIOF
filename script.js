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

  if (slides.length === 0) return; // 🔥 prevents crash

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
////////////////////////////////////////////////////////////////////
const videos = [
        "IajeQM00yfE",
        "52IyDIMyejQ",
        "yXRlrix-pPk",
        "mIfpVrYIhvM",
      ];

      let currentVideo = 0;

      function changeVideo(direction) {
        currentVideo += direction;

        if (currentVideo < 0) {
          currentVideo = videos.length - 1;
        }

        if (currentVideo >= videos.length) {
          currentVideo = 0;
        }

        const player = document.getElementById("video-player");

        player.src = `https://www.youtube.com/embed/${videos[currentVideo]}?rel=0`;
      }
      /////////////////////////////////////////////////////////////////////////////
    const galleryImages = document.querySelectorAll(".gallery-img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");

if (popup && popupImg && galleryImages.length > 0) {
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.src = img.src;
    });
  });

  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });
}
      ////////////////////////////////////////////////////////////////////////////
      const members = {
        julie: {
          name: "Julie",
          birthday: "March 29, 2000",
          role: "Leader, Main Rapper",
          nationality: "Korean-American",
          fact: "She lived in Hawaii before becoming an idol.",
          photo: "images/julie.webp",
        },
        natty: {
          name: "Natty",
          birthday: "May 30, 2002",
          role: "Main Dancer, Lead Vocalist",
          nationality: "Thai",
          fact: "She trained in Korea since she was very young.",
          photo: "images/natty.webp",
        },
        belle: {
          name: "Belle",
          birthday: "March 20, 2004",
          role: "Main Vocalist",
          nationality: "Korean-American",
          fact: "Her father is famous singer Shim Shin.",
          photo: "images/belle.webp",
        },

        haneul: {
          name: "Haneul",
          birthday: "May 25, 2005",
          role: "Lead Vocalist",
          nationality: "Korean",
          fact: "She is the youngest member (maknae).",
          photo: "images/haneul.webp",
        },
      };

      function showMember(member, event) {
        document.getElementById("member-name").textContent =
          members[member].name;
        document.getElementById("member-birthday").textContent =
          members[member].birthday;
        document.getElementById("member-role").textContent =
          members[member].role;
        document.getElementById("member-nationality").textContent =
          members[member].nationality;
        document.getElementById("member-fact").textContent =
          members[member].fact;
        document.getElementById("member-photo").src = members[member].photo;

        document
          .querySelectorAll(".member-name")
          .forEach((el) => el.classList.remove("active"));
        event.target.classList.add("active");
      }
