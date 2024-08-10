
// =============== SHOW MENU ================

const navMenu = document.querySelector('#nav-menu'),
     navToggle = document.querySelector('#nav-toggle'),
     navClose = document.querySelector('#nav-close'); 

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        // console.log('clicked');
    });
}

//  Menu hidden 
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        // console.log('clicked');
    });
}

// =========== Remove Menu MOBILE ==========

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
// when we click on each nav__link, me remove the show_menu close
    navMenu.classList.remove('show-menu');
}

navLink.forEach( n => n.addEventListener('click', linkAction));

//  ====== ADD BLUR HEADER ================

function blurHeader() {
    const header = document.getElementById('header')
    // Add a class if the bottom is greater then 50 of the  view
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);


//  =============== EMAIL JS =============
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

     function sendEmail(e) {
        e.preventDefault()

        // serviceID - templateID - #form-id - publickey 
        emailjs.sendForm('service_u4apvwi', 'template_4fsmyzo', '#contact-form', 'TVmjlPZguYiwuSA2k')
        .then( function() {
                // Show sent message 
                contactMessage.textContent = 'Message sent successfully ✅';

                // Remove message after five seconds
                setTimeout( function() {
                    contactMessage.textContent = ' '
                }, 5000),

                // Clear input fields
                contactForm.remove();
        }, () => {
            // Show error message
            contactMessage.textContent = "Message not sent (service error) ❌"
        });
    }

    contactForm.addEventListener('submit', sendEmail)

    // Names: {{user_name}}

    // Email: {{user_email}}
    
    // Message: {{user_message}}
    
    // Best wishes,
    // EmailJS team

//  =============== SHOW SCROLL UP ============
 function scrollup() {
    const scrollup =document.getElementById('scroll-up')
    
// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                : scrollup.classList.remove('show-scroll');
 }
 window.addEventListener('scroll', scrollup);
 

// ================ SCROLL SECTIONS ACTIVE LINK ========
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= screenTop + sectionHeight) {
            sectionClass.classList.add('active_link')
        }else{
            section.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


//  =============== SCROLL REVEAL ANIMATION ==========

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true / Anmation repeat 
})

sr.reveal(`.home__data, .experience,.skills, contact__container `);
sr.reveal(`.home__img`, {delay: 600});
sr.reveal(`.home__scroll`, {delay: 800});
sr.reveal(`.work__card, .services__card`, {interval: 100});
sr.reveal(`.about__container`, {origin: 'right'});
sr.reveal(`.about__img`, {origin: 'left'});
