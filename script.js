function changeColor() {
  let message = document.getElementById("message");
  let colors = ["red", "blue", "green", "yellow", "purple"];
  let randomColor;
  randomColor = colors[Math.floor(Math.random() * colors.length)];
  message.style.color = randomColor;
}

