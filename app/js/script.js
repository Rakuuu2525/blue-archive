const link1 = document.querySelector("#link1");
const myDropdown1 = document.querySelector("#myDropdown1");
const link2 = document.querySelector("#link2");
const myDropdown2 = document.querySelector("#myDropdown2");
const link3 = document.querySelector("#link3");
const myDropdown3 = document.querySelector("#myDropdown3");
link1.addEventListener("click", function () {
  if (myDropdown1.classList.contains("show")) {
    myDropdown1.classList.remove("show");
    myDropdown1.classList.add("hide");
  } else {
    myDropdown1.classList.add("show");
    myDropdown1.classList.remove("hide");
  }
});
link2.addEventListener("click", function () {
  if (myDropdown2.classList.contains("show")) {
    myDropdown2.classList.remove("show");
    myDropdown2.classList.add("hide");
  } else {
    myDropdown2.classList.add("show");
    myDropdown2.classList.remove("hide");
  }
});
link3.addEventListener("click", function () {
  if (myDropdown3.classList.contains("show")) {
    myDropdown3.classList.remove("show");
    myDropdown3.classList.add("hide");
  } else {
    myDropdown3.classList.add("show");
    myDropdown3.classList.remove("hide");
  }
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".header__links--dropbtn")) {
    var dropdowns = document.getElementsByClassName(
      "header__links--drop-content"
    );
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        openDropdown.classList.add("hide");
      }
    }
  }
});

const menuIcon = document.querySelectorAll("#menu-icon");
const menu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
menuIcon.forEach(function (icon) {
  icon.addEventListener("click", function () {
    if (header.classList.contains("open")) {
      header.classList.remove("open");
      menu.classList.remove("fade-out");
      menu.classList.add("fade-in");
    } else {
      header.classList.add("open");
      menu.classList.add("fade-out");
      menu.classList.remove("fade-in");
    }
  });
});
