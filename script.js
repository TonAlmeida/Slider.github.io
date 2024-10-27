const sliderContainer = document.getElementById(`slider-container`),
  next = document.getElementById(`next`),
  previous = document.getElementById(`previus`),
  sliders = sliderContainer.querySelectorAll(".larger-slider");
let current = 0;

next.addEventListener(`click`, nextSlide);
previous.addEventListener(`click`, previousSlide);

function nextSlide() {
  if (current === sliders.length) {
    console.log(`into if condition of end`);
    current = 0;
    sliderContainer.style.transition = `none`;
    sliderContainer.style.transform = `translateX(0)`;
    setTimeout(() => {
      sliderContainer.style.transition = `transform 0.5s ease-in-out`;
      console.log(`time out end`);
    }, 50);
  }
  console.log(`next`, current, sliders.length);
  current++;
  sliderContainer.style.transform = `translateX(-${current * 100}vw)`;
}

function previousSlide() {}

// function load() {
//   let time = 3500;
//   setInterval(() => {
//     nextSlide();
//   }, time);
// }

// window.addEventListener(`load`, load);
