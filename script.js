//variables
const sliderContainer = document.getElementById(`slider-container`),
  next = document.getElementById(`next`),
  previous = document.getElementById(`previus`),
  sliders = () => sliderContainer.querySelectorAll(".larger-slider"),
  first = sliderContainer.firstChild,
  last = sliderContainer.lastChild;
let current = 1;

//set initial position
start();

//events
next.addEventListener(`click`, nextSlide);
previous.addEventListener(`click`, previousSlide);

//functions
function start() {
  //positioning
  sliderContainer.style.tranform = `translateX(-${current * 100}vw)`;

  //add images
  sliderContainer.querySelectorAll(".img").forEach((item, index) => {
    item.style.backgroundImage = `url(images/${index}.jpg)`;
    item.style.backgroundSize = `cover`;
    item.style.backgroundPosition = `center`;
  });

  //adding ilusions
  const first = sliderContainer.firstElementChild.cloneNode(true);
  const last = sliderContainer.lastElementChild.cloneNode(true);
  sliderContainer.insertBefore(last, sliderContainer.firstChild);
  sliderContainer.appendChild(first);
}
function nextSlide() {
  if (current === sliders().length - 2) {
    retrunFirst();
  }
  current++;
  sliderContainer.style.transform = `translateX(-${current * 100}vw)`;
}

function previousSlide() {
  if (current === 1) {
    returnLast();
  }
  current--;
  sliderContainer.style.transform = `translateX(-${current * 100}vw)`;
}

function retrunFirst() {
  current = -1;
  sliderContainer.style.transition = `none`;
  sliderContainer.style.transform = `translateX(0)`;
  setTimeout(() => {
    sliderContainer.style.transition = `transform 0.5s ease-in-out`;
    current++;
    sliderContainer.style.transform = `translateX(-${current * 100}vw)`;
  }, 10);
}

function returnLast() {
  current = sliders().length;
  sliderContainer.style.transition = `none`;
  sliderContainer.style.transform = `translateX(-${current * 100})vw`;
  setTimeout(() => {
    sliderContainer.style.transition = `transform 0.5s ease-in-out`;
    current--;
    sliderContainer.style.transform = `translateX(-${current * 100}vw)`;
  }, 10);
}

// function load() {
//   let time = 3500;
//   setInterval(() => {
//     nextSlide();
//   }, time);
// }

// window.addEventListener(`load`, load);
