const hamburger = document.getElementById('hamburger');


hamburger.addEventListener('click', () =>{
    navToggle();
})


function navToggle() {
     let mobileNav = document.getElementById('mobile-nav');
     

    if (mobileNav.style.display === 'none' ) {
        mobileNav.style.display = "block";
        mobileNav.style.setProperty('--display, block')
        
     } else {
         mobileNav.style.display = "none";
         mobileNav.style.setProperty('--display, none')


     }
}

