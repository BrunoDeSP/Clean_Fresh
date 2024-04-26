window.addEventListener("scroll", function(){
    let navbar = document.querySelector("#navbar")
    navbar.classList.toggle('active', window.scrollY > 500)
}) 


