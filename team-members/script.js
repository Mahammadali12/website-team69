// Get the modal
var modal1 = document.getElementById("Modal1");
var modal2 = document.getElementById("Modal2");
var modal3 = document.getElementById("Modal3");
var modal4 = document.getElementById("Modal4");

// Get the button that opens the modal
var btn1 = document.getElementById("link-button1");
var btn2 = document.getElementById("link-button2");
var btn3 = document.getElementById("link-button3");
var btn4 = document.getElementById("link-button4");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

span4.onclick = function() {
  modal4.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal1) {
        modal1.style.display = "none";
     }
})
window.addEventListener("click", function(event) {
  if (event.target == modal2) {
        modal2.style.display = "none";
     }
})
window.addEventListener("click", function(event) {
  if (event.target == modal3) {
        modal3.style.display = "none";
     }
})
window.addEventListener("click", function(event) {
  if (event.target == modal4) {
        modal4.style.display = "none";
     }
})
