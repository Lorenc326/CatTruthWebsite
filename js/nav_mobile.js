let wrapper = document.querySelector(".mobile_wrapper");
let menu = wrapper.querySelector(".mobile_menu");

let bottom_nav = document.querySelectorAll("header nav")[0].cloneNode(true);
let top_nav = document.querySelectorAll("header nav")[1].cloneNode(true);
menu.appendChild(top_nav);
menu.appendChild(bottom_nav);

function open_menu(){
    wrapper.style.display = "block";
    top_nav.style.display = "block";
    bottom_nav.style.display = "block";
}

function close_menu() {
    wrapper.style.display = "none";
    top_nav.style.display = "none";
    bottom_nav.style.display = "none";
}