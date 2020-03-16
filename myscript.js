// JavaScript File
// let statement
let myNumber;
// function to background colour
function newBackground() {
  document.getElementById("body").style.backgroundColor="lightgreen";
}
// message function
function newMessage() {
  document.getElementById("h1").innerHTML="Favourite Number Survey";
}
// textbox visibility function
function newTextbox() {
  document.getElementById("myform").style.display="block";
}
// button visibility function
function newButton() {
  document.getElementById("mybutton").style.display="block";
}
//alert function that finds inputted number and forms a sentence with it
function newAlert() {
  myNumber=document.getElementById("number").value;
  alert(myNumber + " is also my favourite number!");
}
//changes background colour
window.addEventListener("mouseover", newBackground);
//adds message
window.addEventListener("mouseover", newMessage);
//makes textbox appear
window.addEventListener("mouseover", newTextbox);
//makes button appear
window.getElementById("div").addEventListener("click", newButton);
//makes button send alert
window.getElementById("mybutton").addEventListener("click", newAlert);