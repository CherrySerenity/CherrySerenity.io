/* =========================================================
   cherry-orchard-slideshow.js
   External JavaScript file for Cherry Serenity's js.htm page
   This file controls the required external image slideshow.
   ========================================================= */

var slideData = [
  {
    src: "images/sims1.png",
    caption: "Featured screenshot from my Sims 3 livestreams."
  },
  {
    src: "images/sims2.png",
    caption: "Autumn festival energy and spooky cozy storytelling."
  },
  {
    src: "images/sims3.png",
    caption: "Creative chaos and painterly magic from the stream."
  },
  {
    src: "images/sims4.png",
    caption: "A softer family-centered moment from a Sims 3 session."
  }
];

var currentSlide = 0;

function showSlide(index) {
  var slideImage = document.getElementById("externalSlide");
  var slideCaption = document.getElementById("externalCaption");

  if (!slideImage || !slideCaption) {
    return;
  }

  slideImage.src = slideData[index].src;
  slideImage.alt = slideData[index].caption;
  slideCaption.textContent = slideData[index].caption;
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slideData.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slideData.length - 1;
  }
  showSlide(currentSlide);
}

window.onload = function() {
  showSlide(currentSlide);

  setInterval(function() {
    nextSlide();
  }, 3500);
};