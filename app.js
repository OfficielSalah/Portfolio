window.onscroll = function() {stickbar()};

var navbar = document.getElementById("nav2");
var sticky = navbar.offsetTop;

function stickbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.opacity=1.0;
  } else {
    navbar.classList.remove("sticky");
    navbar.style.opacity=0.0;
  }
}

