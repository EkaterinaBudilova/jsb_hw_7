const slides = document.getElementsByClassName('slide');
let currSlide = slides[0];
currSlide.classList.add('slide-current');
const sliderNav = document.getElementsByClassName('slider-nav');

const controls = sliderNav[0].children;

function isFirst(slide) {
  if (slide === slides[0]) {
    controls[0].classList.add('disabled');
    controls[2].classList.add('disabled');
  }
}
isFirst(currSlide);
function act(event) {
  currSlide.classList.remove('slide-current');
  switch (event.target.dataset.action) {
    case 'prev': curr_slide = curr_slide.previousElementSibling; 
    case 'next': curr_slide = curr_slide.nextElementSibling;
    case 'first': curr_slide = slides[0];
    case 'last': curr_slide = slides[slides.length-1];   
  }
  curr_slide.classList.add('slide-current');
  isFirst(currSlide);
}

Array.from(controls).forEach(item => item.addEventListener('click', act));


