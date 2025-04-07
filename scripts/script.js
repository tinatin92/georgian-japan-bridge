const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerOverlay = document.querySelector('.burger-overlay');
const navLinks = document.querySelectorAll('.burger-menu a');


burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  burgerOverlay.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    burgerOverlay.classList.remove('active'); 
  });
});

burgerOverlay.addEventListener('click', () => {
  burgerMenu.classList.remove('active');
  burgerOverlay.classList.remove('active'); 
});

ScrollReveal().reveal('.hero-header', { 
    opacity: 0, 
      easing: 'ease-in-out',
    duration: 800 ,
    // mobile: false 
});

ScrollReveal().reveal('.about-us__text', { 
    distance: '100%', 
    origin: 'left', 
    duration: 1000 ,
    // mobile: false 
});

ScrollReveal().reveal('.about-us_header', { 
    distance: '100%', 
    origin: 'right', 
    duration: 1600,
    // reset: true ,
    // mobile: false 
    
});
ScrollReveal().reveal('.okudzava-img .image', { 
    distance: '100px', 
    origin: 'left', 
    duration: 1000 ,
    // mobile: false 
});
ScrollReveal().reveal('.okudzava-img .okadzava-image_text', { 
    distance: '100px', 
    origin: 'bottom', 
    duration: 1000 ,
    // mobile: false 
});

ScrollReveal().reveal('.okudzava-text_text', { 
    opacity: 0,
    duration: 2000 ,
    // mobile: false 
});

ScrollReveal().reveal('.rel-est_list-item', { 
    distance: '50px', 
    origin: 'bottom', 
    duration: 800, 
    opacity: 0, 
    easing: 'ease-in-out',
    interval: 200 ,
    // mobile: false 
});

ScrollReveal().reveal('.bank-list_item', { 
    distance: '50px', 
    origin: 'bottom', 
    duration: 800, 
    opacity: 0, 
    easing: 'ease-in-out',
    interval: 200 ,
    // mobile: false 
});

ScrollReveal().reveal('.bank-text .h2', { 
    opacity: 0,
    origin: 'right', 
    distance: '100px', 
    duration: 2000 ,
    // mobile: false 
});

ScrollReveal().reveal('.bank-icon ', { 
    opacity: 0,
    duration: 2000 ,
    // mobile: false 
});

ScrollReveal().reveal('.deal-list_list-item', { 
    distance: '50px', 
    origin: 'bottom', 
    duration: 800, 
    opacity: 0, 
    easing: 'ease-in-out',
    interval: 200 ,
    // mobile: false 
});

ScrollReveal().reveal('.deal-img img', { 
    opacity: 0,
    origin: 'left', 
    distance: '100px', 
    duration: 2000 ,
    // mobile: false 
});

ScrollReveal().reveal('.peko2-img1', { 
    distance: '100px', 
    origin: 'bottom', 
    duration: 1000 ,
    // mobile: false 
});

ScrollReveal().reveal('.peko2-img3 img', { 
    distance: '50px', 
    origin: 'right', 
    duration: 800, 
    opacity: 0, 
    easing: 'ease-in-out',
    interval: 200 ,
    // mobile: false 
});

ScrollReveal().reveal('.peko-icon', { 
    opacity: 0,
    origin: 'left', 
    distance: '100%', 
    duration: 2000 ,
    // mobile: false 
});

ScrollReveal().reveal('.globe-list_item', { 
    distance: '50px', 
    origin: 'bottom', 
    duration: 800, 
    opacity: 0, 
    easing: 'ease-in-out',
    interval: 200 ,
    // mobile: false 
});

ScrollReveal().reveal('.globe-img', { 
    distance: '50%px', 
    origin: 'right', 
    duration: 1000, 
    opacity: 0, 
    // mobile: false 
   
});


ScrollReveal().reveal('.news-box', { 
    opacity: 0,
    origin: 'bottom', 
    distance: '50%', 
    easing: 'ease-in-out',
    duration: 1000, 
    interval: 200 ,
    // mobile: false 
});

ScrollReveal().reveal('.testimonial-box', { 
    opacity: 0,
    origin: 'bottom', 
    distance: '200px', 
    easing: 'ease-in-out',
    duration: 1000, 
    interval: 200 ,
    // mobile: false 
});

ScrollReveal().reveal('.footer-img', { 
    distance: '50%', 
    origin: 'left', 
    duration: 2000, 
    opacity: 0, 
    // mobile: false 
});