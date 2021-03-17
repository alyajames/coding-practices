const square = document.querySelector(".square");

function moveRight(event) {
  square.classList.add("run-animation");
}

square.addEventListener("click", moveRight);
