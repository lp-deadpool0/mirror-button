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

let button = document.querySelector("button");

button.addEventListener("click", (ev) => {
  let rect = button.getBoundingClientRect();
  let print = document.createElement("span");
  print.className = "button__print";

  print.style.left = ev.pageX - button.offsetLeft + "px";
  print.style.top = ev.pageY - button.offsetTop + "px";

  button.appendChild(print);

  console.log(
    ` + ${ev.clientX - rect.left}:${ev.clientY - rect.top}    ----------    ${
      ev.pageX - button.offsetLeft
    }:${ev.pageY - button.offsetTop}`
  );
});
