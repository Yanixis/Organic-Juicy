const menuIcon = document.querySelector('.menu-icon'),
      header = document.querySelector('.header');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon--active');
  header.classList.toggle('header--mobile');
});

// Слайдер со стрелками (яблоки)
const sliderArrows = document.querySelector('.slider-arrows'),
      slidesArrows = sliderArrows ? sliderArrows.querySelectorAll('.slider-arrows__item') : [],
      prev = sliderArrows ? sliderArrows.querySelector('.slider-arrows__arrow--left') : null,
      next = sliderArrows ? sliderArrows.querySelector('.slider-arrows__arrow--right') : null;

let slideIndex = 0;

if (prev) prev.addEventListener('click', () => showSlideArrows(-1));
if (next) next.addEventListener('click', () => showSlideArrows(1));

function showSlideArrows(n) {
  if (slidesArrows.length === 0) return;
  if (n !== undefined) slideIndex += n;

  if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
  if (slideIndex >= slidesArrows.length) slideIndex = 0;

  slidesArrows.forEach(item => { item.style.display = 'none'; });
  slidesArrows[slideIndex].style.display = 'block';
}

showSlideArrows();

// Слайдер с точками
const sliderDots = document.querySelector('.slider-dots'),
      slidesDots = sliderDots ? sliderDots.querySelectorAll('.slider-dots__item') : [],
      wrapperDots = sliderDots ? sliderDots.querySelector('.slider-dots__nav') : null;

const dots = [];

if (wrapperDots && slidesDots.length > 0) {
  for (let i = 0; i < slidesDots.length; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.dataset.slideTo = i;
    dot.classList.add('slider-dots__nav-item');
    if (i === 0) dot.classList.add('slider-dots__nav-item--active');

    if (i !== 0) slidesDots[i].style.display = 'none';

    dot.addEventListener('click', showSlideDots);

    wrapperDots.append(dot);
    dots.push(dot);
  }
}

function showSlideDots(e) {
  const slideTo = e.target.dataset.slideTo;
  if (slideTo === undefined) return;

  slidesDots.forEach(item => { item.style.display = 'none'; });
  slidesDots[slideTo].style.display = 'block';

  dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
  e.target.classList.add('slider-dots__nav-item--active');
}
