document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    const prev = document.querySelector(".prev");
    console.log(prev);

    const next = document.querySelector(".next");
    const carousel = document.querySelector(".carousel-container");
    console.log(carousel);

    const track = document.querySelector(".track");
    let width = carousel.offsetWidth;
    let index = 0;
    window.addEventListener("resize", function () {
        width = carousel.offsetWidth;
    });
    next.addEventListener("click", function (e) {
        e.preventDefault();
        index = index + 1;
        prev.classList.add("show");
        track.style.transform = "translateX(" + index * -width + "px)";
        if (track.offsetWidth - index * width < index * width) {
            next.classList.add("hide");
        }
    });
    prev.addEventListener("click", function () {
        index = index - 1;
        next.classList.remove("hide");
        if (index === 0) {
            prev.classList.remove("show");
        }
        track.style.transform = "translateX(" + index * -width + "px)";
    });

});