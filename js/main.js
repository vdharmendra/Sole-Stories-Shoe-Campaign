// SELECTING THE ELEMENT FOR BANNER SLIDER FUNCTION
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let carousel = document.querySelector('.carousel');
let items = carousel.querySelectorAll('.list .item');
let indicator = carousel.querySelector('.indicators');
let dots = indicator.querySelectorAll('.indicators ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let autoPlay;
// BANNER SLIDER AUTO PLAY
const startAutoPlay = () => {
    clearInterval(autoPlay); 
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
}
startAutoPlay();
// SETTING ACTIVE SLIDER 
const setSlider = () => {
    let itemActiveOld = carousel.querySelector('.list .item.active');
    if(itemActiveOld) itemActiveOld.classList.remove('active');
    items[active].classList.add('active');

    let dotActiveOld = indicator.querySelector('.indicators ul li.active');
    if(dotActiveOld) dotActiveOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerText = '0' + (active + 1);
    startAutoPlay();
}
setSlider();

// BANNER SLIDER NEXT BUTTON 
nextBtn.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    carousel.style.setProperty('--calculation', 1);
    setSlider();
}
// BANNER SLIDER PREV BUTTON
prev.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    carousel.style.setProperty('--calculation', -1);
    setSlider();
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
}

// BANNER SLIDER INDICATOR 
dots.forEach((item, position) => {
    item.onclick = () => {
        active = position;
        setSlider();
    }
})