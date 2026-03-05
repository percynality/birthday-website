function startSurprise() {

  // Fade-in Music
  const music = document.getElementById("bgMusic");
  music.volume = 0;
  music.play();

  let volume = 0;
  const fadeInterval = setInterval(() => {
    if (volume < 0.6) {
      volume += 0.02;
      music.volume = volume;
    } else {
      clearInterval(fadeInterval);
    }
  }, 200);

  // Show gallery section
  document.getElementById("gallerySection").style.display = "block";

  // Hide button
  document.querySelector(".fancy-btn").style.display = "none";

  // Reveal photos one by one
  const photos = document.querySelectorAll(".photo");

  photos.forEach((photo, index) => {
    setTimeout(() => {
      photo.classList.add("show");
    }, index * 1200);
  });

  // 🔥 Reveal love text AFTER photos finish
  setTimeout(() => {
    const loveText = document.getElementById("loveText");
    loveText.classList.remove("hidden");
    loveText.classList.add("show");
  }, 3000);
}
