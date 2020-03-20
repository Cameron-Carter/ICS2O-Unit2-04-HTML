// JavaScript File
// let statement
let myNumber;
// function to background colour
function myBackground() {
  document.getElementById("body").style.backgroundColor="lightgreen";
}
// message function
function myMessage() {
  document.getElementById("h1").innerHTML="Favourite Number Survey";
}
// textbox visibility function
function myTextbox() {
  document.getElementById("myform").style.display="block";
}
// button visibility function
function myButton() {
  document.getElementById("button1").style.display="block";
}
//alert function that finds inputted number and forms a sentence with it
function myAlert() {
  myNumber=document.getElementById("numberinput").value;
  alert(myNumber + " is also my favourite number!");
}
//changes background colour
window.addEventListener("load", myBackground);
//adds message
window.addEventListener("load", myMessage);
//makes textbox appear
window.addEventListener("mouseover", myTextbox);
//makes button appear
window.addEventListener("mouseover", myButton);
//makes button send alert
document.getElementById("button1").addEventListener("click", myAlert);
