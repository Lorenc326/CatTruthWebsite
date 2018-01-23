let width = 349;
let count = 3;

let slider = document.getElementById('slider');
let list = slider.querySelector('.images');
let listElems = slider.querySelectorAll('figure');
let position = 0;
let prev = slider.querySelector('.prev');
let next = slider.querySelector('.next');
let firstView = 0;

if(firstView === 0){
    prev.style.opacity = "0.6";
    firstView++;
}

prev.onclick = function() {
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
    if(position === 0){
        prev.style.opacity = "0.6";
    } else if(position === -width * (listElems.length - count)){
        next.style.opacity = "0.6";
    }
    if(position !== 0 && prev.style.opacity){
        prev.removeAttribute('style');
    }
    if(-width * (listElems.length - count) !== position && next.style.opacity){
        next.removeAttribute('style');
    }
};

next.onclick = function() {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
    if(position === 0){
        prev.style.opacity = "0.6";
    } else if(position === -width * (listElems.length - count)){
        next.style.opacity = "0.6";
    }
    if(position !== 0 && prev.style.opacity){
        prev.removeAttribute('style');
    }
    if(-width * (listElems.length - count) !== position && next.style.opacity){
        next.removeAttribute('style');
    }
};