const texts = document.querySelectorAll('.text');
const imgs = document.querySelectorAll('.img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const slide = (elementOut, elementIn) => {

    for (let text of texts) {        
        text.classList.add('transition');

        if (!text.classList.contains('d-none')) {

            text.style.transform = `translateY(${elementOut}%)`;

            setTimeout(() => {
                text.classList.add('d-none');
            }, 1000)

        } else {

            text.style.transform = `translateY(${elementIn}%)`;
            text.classList.remove('d-none');
            setTimeout(() => {
                text.style.transform = 'translateY(0)';
            }, 1000)
        }
    }

    for (let img of imgs) {        
        img.classList.add('transition');

        if (!img.classList.contains('d-none')) {

            img.style.transform = `translateX(${elementOut}%)`;

            setTimeout(() => {
                img.classList.add('d-none');
            }, 1000)

        } else {

            img.style.transform = `translateX(${elementIn}%)`;
            img.classList.remove('d-none');
            document.body.style.overflowX = 'hidden';
            setTimeout(() => {
                img.style.transform = 'translateX(0)';
            }, 1000);
            setTimeout(() => document.body.style.overflowX = 'unset', 2000)
        }
    }
}

const slideNext = () => slide(250, -250);
const slidePrev = () => slide(-250, 250);

next.addEventListener('click', slideNext, false);
prev.addEventListener('click', slidePrev, false);