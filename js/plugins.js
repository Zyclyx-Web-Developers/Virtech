$(document).ready(function () {
  
  // remove page loading circle
  $(".se-pre-con").fadeOut("slow");
  
  // Initiate Animate on scroll
  AOS.init({
    once: true,
    mirror: false
  });

  // update footer copyright year
  document.getElementById("current-year").innerHTML = new Date().getFullYear();
});