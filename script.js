const sliderContainer = document.getElementById(`slider-container`),
     next = document.getElementById(`next`),
     previous = document.getElementById(`previus`),
     width = sliderContainer.offsetWidth,
     smallerSpan1 = document.getElementById(`1`),
     smallerSpan2 = document.getElementById(`2`),
     smallerSpan3 = document.getElementById(`3`),
     smallerSpan4 = document.getElementById(`4`),
     smallerSpan5 = document.getElementById(`5`),
     smallerSpan6 = document.getElementById(`6`),
     SpanAll = document.querySelectorAll(`.smaller-slider`);

const spanContainer = {
    
    1: smallerSpan1.addEventListener(`click`, e => {
        sliderContainer.scrollLeft = 0;

        reload();
    }),
    2: smallerSpan2.addEventListener(`click`, e => {
        sliderContainer.scrollLeft = width * 1;

        reload();
    }),
    3: smallerSpan3.addEventListener(`click`, e => {
        sliderContainer.scrollLeft = width * 2;

        reload();
    }),
    4: smallerSpan4.addEventListener(`click`, e => {
        sliderContainer.scrollLeft = width * 3;

        reload();
    }),
    5: smallerSpan5.addEventListener(`click`, e => {
        sliderContainer.scrollLeft = width * 4;

        reload();
    }),
    6: smallerSpan6.addEventListener(`click`, e => {
        sliderContainer.scrollLeft = width * 5;

        reload();
    }),
}

next.addEventListener(`click`, nextSlide);
previous.addEventListener(`click`, previousSlide);

function nextSlide() {
        if(sliderContainer.scrollLeft >= (width * (SpanAll.length-1))) {
            sliderContainer.scrollLeft = 0;
            reload();
        } else {
            sliderContainer.scrollLeft += width;
            reload();
        };
 }

function previousSlide() {
    if(sliderContainer.scrollLeft == 0) {
        sliderContainer.scrollLeft = (width * (SpanAll.length-1));
        reload();
    } else {
        sliderContainer.scrollLeft -= width;
        reload();
    };
}

function load() {
    let time = 3500;
    setInterval(() => {
        nextSlide();
    }, time)
};

function reload() {
    const selected = document.querySelector(`.selected`);
    selected.classList.remove(`selected`);
    switch(sliderContainer.scrollLeft) {
        case 0:
            SpanAll[0].classList.add(`selected`);
            break;
        case 1366: 
            SpanAll[1].classList.add(`selected`);
            break;
        case 2732:
            SpanAll[2].classList.add(`selected`);
            break;
        case 4098:
            SpanAll[3].classList.add(`selected`);
            break;
        case 5464:
            SpanAll[4].classList.add(`selected`);
            break;
        case 6830:
            SpanAll[5].classList.add(`selected`);
            break;
    }
}


window.addEventListener(`load`, load);