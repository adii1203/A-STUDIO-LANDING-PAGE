const hamburgerMenu = document.querySelector('.hamburger__menu');
const navlist = document.querySelector('.nav__list');


hamburgerMenu.addEventListener('click' ,()=>{
    const openClose = hamburgerMenu.getAttribute('aria-expanded');
    if(openClose==='false'){
        hamburgerMenu.setAttribute("aria-expanded", "true")
        // navlist.style.display = 'block';
        navlist.style.opacity = '1';
        navlist.style.transform = 'translateY(200px)';
        
    }
    else{
        hamburgerMenu.setAttribute("aria-expanded", "false")
        navlist.style.opacity = '0';
        navlist.style.transform = 'translateY(-200px)';  
        // navlist.style.display = 'none';
      }
})