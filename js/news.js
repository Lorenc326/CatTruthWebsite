let recentNewsTag = document.getElementsByClassName('rec_news_tag')[0];
let mainNewsTag = document.getElementsByClassName('main_news_tag')[0];
let recentNews = document.getElementsByClassName('rec_news');

mainNewsTag.onclick = function () {
    for(let i = 0; i < recentNews.length; i++){
        recentNews[i].style.display = "none";
    }
    if(!mainNewsTag.classList.contains("main_news_tag_act")){
        mainNewsTag.classList.add("main_news_tag_act");
        mainNewsTag.classList.remove("main_news_tag");
        if(recentNewsTag.classList.contains("rec_news_tag_act")){
            recentNewsTag.classList.remove("rec_news_tag_act");
            recentNewsTag.classList.add("rec_news_tag");
        }
    }
};
recentNewsTag.onclick = function () {
    for(let i = 0; i < recentNews.length; i++){
        recentNews[i].style.display = "block";
    }
    if(!recentNewsTag.classList.contains("rec_news_tag_act")){
        recentNewsTag.classList.add("rec_news_tag_act");
        recentNewsTag.classList.remove("rec_news_tag");
        if(mainNewsTag.classList.contains("main_news_tag_act")){
            mainNewsTag.classList.remove("main_news_tag_act");
            mainNewsTag.classList.add("main_news_tag");
        }
    }
};