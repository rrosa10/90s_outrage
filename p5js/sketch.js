function setup() {
  noCanvas(); // Remove the canvas element created by p5.js
  const audioPlayer = document.getElementById('audio-player');
  const images = document.querySelectorAll('.doom');
  const images1 = document.querySelectorAll('.wolf');
  const images2 = document.querySelectorAll('.mk');
  const images3 = document.querySelectorAll('.nt');

  images.forEach((img) => {
      img.addEventListener('mouseover', () => playMusic(img, audioPlayer));
      img.addEventListener('mouseout', () => stopMusic(audioPlayer));
  });
  
  images1.forEach((img) => {
    img.addEventListener('mouseover', () => playMusic(img, audioPlayer));
    img.addEventListener('mouseout', () => stopMusic(audioPlayer));
});

images2.forEach((img) => {
  img.addEventListener('mouseover', () => playMusic(img, audioPlayer));
  img.addEventListener('mouseout', () => stopMusic(audioPlayer));
});
images3.forEach((img) => {
  img.addEventListener('mouseover', () => playMusic(img, audioPlayer));
  img.addEventListener('mouseout', () => stopMusic(audioPlayer));
});
}


function playMusic(img, audioPlayer) {
  const musicFile = img.getAttribute('data-music');
  audioPlayer.src = musicFile;
  audioPlayer.play();
}

function stopMusic(audioPlayer) {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

