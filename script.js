const sliderContainer = document.getElementById(`slider-container`),
  next = document.getElementById(`next`),
  previous = document.getElementById(`previus`),
  sliders = sliderContainer.querySelectorAll(".larger-slider");
let current = 0;

next.addEventListener(`click`, nextSlide);
previous.addEventListener(`click`, previousSlide);

function nextSlide() {
  if (current === sliders.length - 1) {
    console.log(`into if condition of end`);
    current = -1;
    sliderContainer.style.transition = `none`;
    sliderContainer.style.transform = `translateX(0)`;
    setTimeout(() => {
      sliderContainer.style.transition = `transform 0.5s ease-in-out`;
    }, 10);
  }
  console.log(`next`, current, sliders.length);
  current++;
  sliderContainer.style.transform = `translateX(-${current * 100}vw)`;
}

function previousSlide() {
  if (current === 0) {
    current = sliders.length;
    sliderContainer.style.transition = `none`;
    sliderContainer.style.transform = `translateX(-${current * 100}vw)`;
    setTimeout(() => {
      sliderContainer.style.transition = `transform 0.5s ease-in-out`;
    }, 10);
  }
  console.log(current, sliders.length);
  current--;
  sliderContainer.style.transform = `translateX(-${current * 100}vw)`;
}

// function load() {
//   let time = 3500;
//   setInterval(() => {
//     nextSlide();
//   }, time);
// }

// window.addEventListener(`load`, load);
