const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

const squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");

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
      alert("CORRECT!!");
    } else {
      alert("WRONG!!");
    }
  });
}
