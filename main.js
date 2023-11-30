// scroll on showing nav bar background 
window.addEventListener('scroll', () => {
     document.querySelector('nav').classList.toggle('window_scroll', window.scrollY > 0)
});


// click event on faqs
let faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => faq.addEventListener("click", (e) => {
     faq.classList.toggle("open");
     const faqIcon = faq.querySelector(".fa-solid");
     if(faqIcon.className === "fa-solid fa-plus"){
          faqIcon.classList = "fa-solid fa-minus";
     }else {
          faqIcon.classList = "fa-solid fa-plus";
     }
}))

//click menu on tablet
let menu = document.querySelector(".nav__menu");
let openMenu = document.querySelector("#open-menu-btn");
let closeMenu = document.querySelector("#close-menu-btn");

openMenu.addEventListener("click", () => {
     menu.style.display = "flex";
     openMenu.style.display = "none";
     closeMenu.style.display = "inline-block";
})
closeMenu.addEventListener("click", () => {
     menu.style.display = "none";
     openMenu.style.display = "inline-block";
     closeMenu.style.display = "none";
})

