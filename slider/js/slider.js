const slides = document.getElementsByClassName('slide');
let currSlide = slides[0];
const sliderNav = document.getElementsByClassName('slider-nav');
const controls = sliderNav[0].children;

currSlide.classList.add('slide-current');

function isFirst(slide) {
  if (slide === slides[0]) {
    controls[0].classList.add('disabled');
    controls[2].classList.add('disabled');
  }
  else {
    controls[0].classList.remove('disabled');
    controls[2].classList.remove('disabled');
  }
}

function isLast(slide) {
  if (slide === slides[slides.length-1]) {
    controls[1].classList.add('disabled');
    controls[3].classList.add('disabled');
  }
  else {
    controls[1].classList.remove('disabled');
    controls[3].classList.remove('disabled');
  }
}

isFirst(currSlide);
isLast(currSlide);

function act(event) {
  currSlide.classList.remove('slide-current');
  switch (event.target.dataset.action) {
    case 'prev': 
      console.log('prev');
      currSlide = currSlide.previousElementSibling; 
      break;
    
    case 'next': currSlide = currSlide.nextElementSibling;
      break;
    case 'first': currSlide = slides[0];
      break;
    case 'last': currSlide = slides[slides.length-1];   
      break;
  }
  currSlide.classList.add('slide-current');
  isFirst(currSlide);
  isLast(currSlide);
}

Array.from(controls).forEach(item => item.addEventListener('click', act));


