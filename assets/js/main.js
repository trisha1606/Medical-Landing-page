/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLinks.forEach(link => link.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (window.scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
};

window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER PRICES ===============*/
const swiperPrices = new Swiper('.prices__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
  const scrollup = document.getElementById('scrollup')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrolly >= 350 ? scrollup.classList.add('show-scroll')
          :scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

sections.forEach( current =>{
  const sectionHeight = current.offsetHeight,
     sectionTop = current.offsetTop - 58,
     sectionId = current.getAttribute('id'),
     sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + '] ')

  if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
    sectionClass.classList.add('active-link')
  } else{
    sectionClass.classList.remove('active-link')

  }

})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Previously selected theme (if any)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Apply saved theme
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-sun-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate theme manually
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem(
    'selected-theme',
    document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  )
  localStorage.setItem(
    'selected-icon',
    themeButton.classList.contains(iconTheme) ? 'ri-sun-fill' : 'ri-moon-fill'
  )
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  // reset: true,  //Animation repeat
})

sr.reveal(`.home__content`, {origin: 'bottom'})
sr.reveal(`.home__info`, {origin: 'bottom' , delay: 800})
sr.reveal(`.home__data`, {delay: '1400'})
sr.reveal(`.home__content`, {origin: 'bottom'})
sr.reveal(`.home__button`, {origin: 'left' , delay: 1800})

sr.reveal(`.delivery__data`, {origin: 'right'})
sr.reveal(`.delivery__content`, {origin: 'left' , delay: 600})
sr.reveal(`.delivery__img`, {delay: 1200})

sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__img`, `.contact__data`, {origin: 'right'})

sr.reveal(`.prices__box`)
sr.reveal(`.prices__swiper`, {origin: 'bottom' , delay: 600})

sr.reveal(`.gallery__image`, {interval: 1000})

sr.reveal(`.footer__container`)