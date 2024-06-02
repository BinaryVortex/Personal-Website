var typed = new Typed(".text", {
    strings: ["Programming" ,"Technology", "Graphic Design" , "Web Development","Digital Marketting","Copywritting","Photography","Designing","Sustanability","Finance","Entrepreneurship"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})