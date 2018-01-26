/*                     !!!!!!!!     Top-news slider     !!!!!!!!                             */

let width = 349;
let count = 3;

let slider = document.getElementById('slider');
let list = slider.querySelector('.images');
let listElems = slider.querySelectorAll('figure');
let position = 0;
let prev = slider.querySelector('.prev');
let next = slider.querySelector('.next');

prev.style.opacity = "0.5";     /// default

prev.onclick = function() {
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
    if(position === 0){
        prev.style.opacity = "0.5";
    } else if(position === -width * (listElems.length - count)){
        next.style.opacity = "0.5";
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
        prev.style.opacity = "0.5";
    } else if(position === -width * (listElems.length - count)){
        next.style.opacity = "0.5";
    }
    if(position !== 0 && prev.style.opacity){
        prev.removeAttribute('style');
    }
    if(-width * (listElems.length - count) !== position && next.style.opacity){
        next.removeAttribute('style');
    }
};



/*                     !!!!!!!!     Blog slider     !!!!!!!!                             */

let width_b =300;
let slider_b = document.querySelector(".blog_slider");
let articles = slider_b.querySelector(".blog_articles");
let slides = articles.querySelectorAll(".blog_article");
let position_b = 0;
let prev_b = document.querySelector('.prev_b');
let next_b = document.querySelector('.next_b');

prev_b.style.opacity = "0.4";     /// default

prev_b.onclick = function() {
    position_b = Math.min(position_b + width_b, 0);
    articles.style.marginLeft = position_b + 'px';
    if(position_b === 0){
        prev_b.style.opacity = "0.4";
    } else if(position_b === -width_b * slides.length ){
        next_b.style.opacity = "0.4";
    }
    if(position_b !== 0 && prev_b.style.opacity){
        prev_b.removeAttribute('style');
    }
    if(-width_b * (slides.length - 1) !== position_b && next_b.style.opacity){
        next_b.removeAttribute('style');
    }
};

next_b.onclick = function() {
    position_b = Math.max(position_b - width_b, -width_b * (slides.length - 1));
    articles.style.marginLeft = position_b + 'px';
    if(position_b === 0){
        prev_b.style.opacity = "0.4";
    } else if(position_b === -width_b * (slides.length - 1)){
        next_b.style.opacity = "0.4";
    }
    if(position_b !== 0 && prev_b.style.opacity){
        prev_b.removeAttribute('style');
    }
    if(-width_b * (slides.length - 1) !== position_b && next_b.style.opacity){
        next_b.removeAttribute('style');
    }
};



