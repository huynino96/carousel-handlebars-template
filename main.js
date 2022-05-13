"use strict";
// Select all image_carousel
let source = document.getElementById("carousel-template").innerHTML;
let template = Handlebars.compile(source);

let data = {
    images: [
        {
            heading: "1",
            image: "https://source.unsplash.com/random?landscape,mountain"
        },
        {
            heading: "2",
            image: "https://source.unsplash.com/random?landscape,cars"
        },
        {
            heading: "3",
            image: "https://source.unsplash.com/random?landscape,night"
        },
        {
            heading: "4",
            image: "https://source.unsplash.com/random?landscape,city"
        },
    ]
};

let html = template(data);
document.querySelector(".carousel-img").innerHTML = html;

let image_carousel = document.querySelectorAll(".image-slick");

let nextImg = document.querySelector(".btn-after");
let prevImg = document.querySelector(".btn-before");

let curImg = 0;
let maxSlide = image_carousel.length - 1;

image_carousel.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});



nextImg.addEventListener("click", function () {
    if (curImg === maxSlide) {
        curImg = 0;
    } else {
        curImg++;
    }

    image_carousel.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curImg)}%)`;
    });
});



prevImg.addEventListener("click", function () {
    if (curImg === 0) {
        curImg = maxSlide;
    } else {
        curImg--;
    }

    image_carousel.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curImg)}%)`;
    });
});
