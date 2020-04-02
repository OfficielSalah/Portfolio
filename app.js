var navbar1 = document.getElementById("nav2");
var sticky1 = navbar1.offsetTop;
function stickbar1() {
  if (window.pageYOffset + 50 >= sticky1) {
    navbar1.classList.add("sticky");
    navbar1.style.opacity = 1.0;
  } else {
    navbar1.classList.remove("sticky");
    navbar1.style.opacity = 0.0;
  }
}
var navbar2 = document.getElementById("cont");
var navbar3 = document.getElementById("ski");
var sticky2 = navbar2.offsetTop;

function stickbar2() {
  if (window.pageYOffset - 900 >= sticky2) {
    navbar3.classList.remove("active");
    navbar2.classList.add("active");
  } else {
    navbar3.classList.add("active");
    navbar2.classList.remove("active");
  }
}

window.onscroll = function() {
  stickbar1();
  stickbar2();
};
