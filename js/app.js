navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    var video = document.querySelector(".video");
    video.srcObject = stream;
    video.play();
  })
  .catch(function (err) {
    console.log("Error accessing camera: " + err);
  });

const button = document.querySelector(".button");
const dirtyTexture = document.querySelector(".button__texture");
const counterView = document.querySelector(".counter");
let clickCounter = 0;

button.addEventListener("click", () => {
  var audio = new Audio();
  audio.volume = 0.2;
  // audio.src = audioFile;
  audio.src = "./audio/click.mp3";
  audio.autoplay = true;

  dirtyTexture.style.opacity = clickCounter / 100;
  counterView.innerText = clickCounter;

  clickCounter++;
});
