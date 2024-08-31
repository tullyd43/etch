let gridSize;
let button = document.querySelector("button");

button.addEventListener("click", () => {
  const body = document.querySelector("body");
  const containOrigin = document.querySelector(".container");
  body.removeChild(containOrigin);
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  body.appendChild(container);
  let gridRows = window.prompt("Enter size of grid");
  let gridSize = gridRows * gridRows;
  let newDiv = null;
  for (let index = 0; index < gridSize; index++) {
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    let flexBasis = 960 / gridRows;
    newDiv.style.flexBasis = `${flexBasis}px`;
    container.appendChild(newDiv);
  }

  wait();
});


function wait() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      let getOpacity = square.style.opacity;
      let numOpacity = Number(getOpacity);
      let newOpacity = (numOpacity += 0.1);
      square.style.opacity = newOpacity;
      square.style.backgroundColor = "violet";
    });
  });
}
