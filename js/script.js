const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

const playButton = document.getElementById("playButton");
const skipButton = document.getElementById("skipButton");
const videoPlayer = document.getElementById("videoPlayer");

playButton.addEventListener("click", function () {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});

videoPlayer.addEventListener("play", function () {
  playButton.classList.remove("paused");
  playButton.classList.add("playing");
});

videoPlayer.addEventListener("pause", function () {
  playButton.classList.remove("playing");
  playButton.classList.add("paused");
});

skipButton.addEventListener("click", function () {
  videoPlayer.currentTime += 10;
  if (videoPlayer.paused) {
    setTimeout(function () {
      if (videoPlayer.paused) {
        videoPlayer.play();
      }
    }, 100);
  }
});


const buttons = document.getElementsByClassName("btnVideo");


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const videoSrc = buttons[i].getAttribute("data-src");
    videoPlayer.src = videoSrc;
    videoPlayer.load();
    videoPlayer.play();
  });
}


skipButton.style.display = "block";

// Image modals
const imageOverlays = document.querySelectorAll(".img-1, .img-2, .img-3, .img-4");

imageOverlays.forEach((overlay, index) => {
  overlay.addEventListener("click", () => openModal("modal" + (index + 1)));
});

// Booking popup
const bookingButton = document.getElementById("booking-button");
bookingButton.addEventListener("click", function() {
  var time = document.getElementById("booking-time").value;
  var date = document.getElementById("booking-date").value;
  document.getElementById("popup-time").textContent = "Time: " + time;
  document.getElementById("popup-date").textContent = "Date: " + date;
  openPopup('book-popup');
});

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function openPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

 
