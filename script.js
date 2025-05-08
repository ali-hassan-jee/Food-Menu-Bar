// const hamBurger=document.querySelector('.hamburger-icon')
// const navBar=document.querySelector('nav')
// const  menuIcon=document.querySelector('.more-icon')
// const  goTop=document.querySelector('.top')

// hamBurger.addEventListener('click',()=>{
//     navBar.classList.add('navbar')
//     hamBurger.classList.add('hide-hamburger');
    
//   document.querySelector('.hamburger-container').style.visibility='hidden';
    
// })

// menuIcon.addEventListener('click',()=>{
//     navBar.classList.remove('navbar')
//     hamBurger.classList.remove('hide-hamburger');
//   document.querySelector('.hamburger-container').style.visibility='visible';

    
// })
// document.addEventListener('click',(e)=>{
    
//     if(!navBar.contains(e.target) && e.target !==hamBurger){
//         navBar.classList.remove('navbar')
//         hamBurger.classList.remove('hide-hamburger');
//   document.querySelector('.hamburger-container').style.visibility='visible';

//     }    
// })
// goTop.addEventListener('click',()=>{
//     scrollTo(0,0);
// })







//******************************************reWritten Professional code ********************************/

document.addEventListener('DOMContentLoaded', () => {
  const hamBurger = document.querySelector('.hamburger-icon');
  const navBar = document.querySelector('nav');
  const menuIcon = document.querySelector('.more-icon');
  const goTop = document.querySelector('.top');
  const hamburgerContainer = document.querySelector('.hamburger-container');

  function showNavbar() {
      navBar.classList.add('navbar');
      hamBurger.classList.add('hide-hamburger');
      hamburgerContainer.style.visibility = 'hidden';
  }

  function hideNavbar() {
      navBar.classList.remove('navbar');
      hamBurger.classList.remove('hide-hamburger');
      hamburgerContainer.style.visibility = 'visible';
  }

  hamBurger.addEventListener('click', showNavbar);
  menuIcon.addEventListener('click', hideNavbar);

  document.addEventListener('click', (e) => {
      const isClickInsideNav = navBar.contains(e.target);
      const isClickOnHamburger = hamBurger.contains(e.target);

      if (!isClickInsideNav && !isClickOnHamburger) {
          hideNavbar();
      }
  });

  goTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
