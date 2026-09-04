const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 0) {

       navbar.style.backgroundColor = "#0e0d0b";
      
    } else {

       navbar.style.backgroundColor = "transparent";    

    }

});