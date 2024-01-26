var latestNewsBigItem = document.querySelector(".latest_news_section .latest_news_center .latest_news_content_container .item_1");

setInterval(function () {
    var latestNewsSmallItem = document.querySelectorAll(".latest_news_section .latest_news_center .latest_news_content_container .small_item");
    if (window.innerWidth <= 850) {
        latestNewsBigItem.classList.remove("big_item");
        latestNewsBigItem.classList.add("small_item");
    }
    if (window.innerWidth > 850) {
        latestNewsBigItem.classList.remove("small_item");
        latestNewsBigItem.classList.add("big_item");
    }
},1);