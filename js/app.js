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
