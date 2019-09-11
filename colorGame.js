let colors = generateRandomColors(6);
const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  colors = generateRandomColors(3);
  console.log(colors);

  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    h1.style.background = "#232323";
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  colors = generateRandomColors(6);
  console.log(colors);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
});

resetButton.addEventListener("click", function() {
  //generate all new colors
  if (hardBtn.classList.value === "selected") {
    colors = generateRandomColors(6);
  } else {
    colors = generateRandomColors(3);
  }
  //pick a new random color from arr
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of sqares on page
  for (let i = 0; i < squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //Add initial colors to squares
  squares[i].style.background = colors[i];

  //Add event listener to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    let clickedColor = this.style.background;
    //compare color to pickColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(pickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  let arr = [];
  //repeat nu times
  for (let i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 to -255
  let r = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to -255
  let g = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to -255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
