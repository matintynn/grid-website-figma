let menuBtn = document.querySelector('svg.menu-btn');
let getUl = document.querySelector('ul.nav-links');
let getMain = document.querySelector('main');
let getHeroGallery = document.querySelector('section.hero-gallery');
let getFooter = document.querySelector('footer');
let getHeader = document.querySelector('header');
let getFooterBtn = document.querySelector('#form');

// add event listener
menuBtn.addEventListener('click', () =>{
    // show arrow icon
    menuBtn.classList.toggle('show');
    // show nav links
    getUl.classList.toggle('showLinks');
    // hide main and footer content
    getMain.classList.toggle('hide');
    getFooter.classList.toggle('hide');

    // Check and show the full heigh of navlinks
    if(getHeader.style.height == '100vh'){
        getHeader.style.height = '';
        getHeroGallery.style.display = '';
    } else{
        getHeader.style.height = '100vh';
        getHeroGallery.style.display = 'none';
    }
})

// prevent default for submit button
getFooterBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Submited successfully !!!');
})