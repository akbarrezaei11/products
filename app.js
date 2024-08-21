const filter = document.querySelector('.filter-container');
const filterbtn = document.querySelector('.filter-btn1');
const filterimg = document.querySelector('.filter-container__titel__img')
const accordion = document.querySelectorAll('.filter-container__item__category');

const displayNone = document.querySelectorAll('.dis-none-input');

const rotate = document.querySelectorAll('.deg');
const color = document.querySelectorAll('.color');



filterbtn.addEventListener('click' , function(){
    filter.classList.toggle('dis-none')
});
filterimg.addEventListener('click' , function(){
    filter.classList.toggle('dis-none')
})

accordion[0].addEventListener('click' , ()=>{
    displayNone[0].classList.toggle('dis-none');
    rotate[0].classList.toggle('rotate');
    color[0].classList.toggle('color-red');
});
accordion[1].addEventListener('click' , ()=>{
    displayNone[1].classList.toggle('dis-none');
    rotate[1].classList.toggle('rotate');
    color[1].classList.toggle('color-red');
});
accordion[2].addEventListener('click' , ()=>{
    displayNone[2].classList.toggle('dis-none');
    rotate[2].classList.toggle('rotate');
    color[2].classList.toggle('color-red');
});
accordion[3].addEventListener('click' , ()=>{
    displayNone[3].classList.toggle('dis-none');
    rotate[3].classList.toggle('rotate');
    color[3].classList.toggle('color-red');
});
console.log(accordion)