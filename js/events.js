console.log("external file");
// option 2 for clickEvent handle
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3 get element by id and then set onclick
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};
