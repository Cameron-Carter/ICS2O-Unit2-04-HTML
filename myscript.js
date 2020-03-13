// JavaScript File
// function to change background
function changeBackground() {
  document.getElementById("body").style.backgroundColor="lightgreen";
}
// function to make text appear
function newHeader() {
  document.getElementById("h1").innerHTML="Website Header";
}
function addBorder() {
  document.getElementById("body").style.borderStyle="solid";
}
function logNumbers() {
  console.log(2+2);
}    
// triggers the background change on mouse movement
window.addEventListener("mouseover", changeBackground);
// when mouse moves, a header appears
window.addEventListener("mouseout", newHeader);
// when button is clicked, a border is added to the body
window.addEventListener("click", addBorder);
// when button is clicked, console logs 2+2, making it display 4
window.addEventListener("click", logNumbers);