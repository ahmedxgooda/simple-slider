const texts = document.querySelectorAll('.text');
const imgs = document.querySelectorAll('.img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const slide = (elementOut, elementIn, timeout_none, time_out_body) => {

    for (let text of texts) {        
        text.classList.add('transition');

        if (!text.classList.contains('d-none')) {

            text.style.transform = `translateY(${elementOut}%)`;

            setTimeout(() => {
                text.classList.add('d-none');
            }, timeout_none)

        } else {

            text.style.transform = `translateY(${elementIn}%)`;
            text.classList.remove('d-none');
            setTimeout(() => {
                text.style.transform = 'translateY(0)';
            }, 100)
        }
    }

    for (let img of imgs) {        
        img.classList.add('transition');

        if (!img.classList.contains('d-none')) {
            document.body.style.overflowX = 'hidden';
            img.style.transform = `translateX(${elementOut}%)`;
            
            setTimeout(() => {
                img.classList.add('d-none');
            }, timeout_none)

        } else {

            img.style.transform = `translateX(${elementIn}%)`;
            img.classList.remove('d-none');

            setTimeout(() => {
                img.style.transform = 'translateX(0)';
            }, 100);
            setTimeout(() => document.body.style.overflowX = 'unset', time_out_body)
        }
    }
}

const slideNext = () => slide(250, -250, 300, 300);
const slidePrev = () => slide(-250, 250, 700, 1000);

next.addEventListener('click', slideNext, false);
prev.addEventListener('click', slidePrev, false);