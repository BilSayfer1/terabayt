let first_btn = document.querySelector('.header__right-block button')
let close_modal = document.querySelector('.modal__close')
let first_modal = document.querySelector('.modal')

// first_btn.onclick = () => {
//     first_modal.style.display = 'flex'
// }

// close_modal.onclick = () => {

//     first_modal.style.display = 'none'
// }


let open_buttons = document.querySelectorAll(`[data-modal]`)
let close_buttons = document.querySelectorAll(`[data-close]`)
let modal = document.querySelector(`.modal`)

function open_close_modal(arr, open ) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList[open ? "add" : "remove"](`show`, `fade`)
            document.body.style.overflow = open ? "hidden" : "scroll"
        }
    });
}

open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)

// let btns = document.querySelectorAll('#btns')

// close_modal.onclick = () => {

//     first_modal.style.display = 'none'
//     body.style.overflow = "scroll"

// }

// const slides = document.querySelectorAll('.offer__slide');
// let slidesindex = 0;
// let numcurr = document.querySelector('#current')

// let totalnum = document.querySelector('#total')

// slides.forEach(slide => slide.classList.add('hide', 'fade'));
// slides[slidesindex].classList.remove('hide');

// const next_btn = document.querySelector('.offer__slider-next');
// const prev_btn = document.querySelector('.offer__slider-prev');

// function slidesshow(n) {
//     slides.forEach(slide => slide.classList.add('hide', 'fade'));
//     slides[slidesindex].classList.add('hide');

//     slidesindex = (slidesindex + n) % slides.length;
//     slides[slidesindex].classList.remove('hide');

// }

// function slidesshow(n) {
//     slides.forEach(slide => {


//         slide.classList.add('hide', 'fade')


//     });

//     slidesindex = (slides.length + slidesindex + n) % slides.length;

//     slides[slidesindex].classList.remove('hide');
// }c

// next_btn.onclick = () => {
//     slidesshow(1);
//     numcurr.innerText =  "0" + slidesindex
// };

// prev_btn.onclick = () => {
//     slidesshow(-1);
//     numcurr.innerText =  "0" + slidesindex

// };


let tabcontent = document.querySelectorAll(`.tabcontent`)
let buttons = document.querySelectorAll(`[data-group]`)

buttons.forEach(btn => {
    btn.onclick = () => {
        const idx = btn.getAttribute(`[data-group]`)
        tabcontent.forEach(slide => slide.classList.add(`hide`))
        tabcontent[idx - 1].classList.remove(`hide`)
    }
})




