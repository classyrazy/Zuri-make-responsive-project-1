var navToggleEl = document.querySelector(".menu-text")
var navCon = document.querySelector(".nav-links")

navToggleEl.addEventListener("click",()=>{
    navCon.classList.toggle("show")
})