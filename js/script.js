const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".main-menu ul li a");
const up = document.querySelector("#top");

let menuOpen = false;

links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("hello");
    mainMenu.classList.remove("open");
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    navbar.classList.add("dark");
  } else {
    navbar.classList.remove("dark");
  }
});

window.addEventListener("scroll", (e) => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    up.classList.add("fadeIn");
    up.classList.remove("fadeOut");
  } else {
    up.classList.add("fadeOut");
    up.classList.remove("fadeIn");
  }
});

up.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

// window.addEventListener('scroll', () => {
//   if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// })