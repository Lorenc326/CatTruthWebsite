let width = 370;
let count = 3;

let slider = document.getElementById('slider');
let list = slider.querySelector('.images');
let listElems = slider.querySelectorAll('figure');
let position = 0;

slider.querySelector('.prev').onclick = function() {
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
};

slider.querySelector('.next').onclick = function() {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};