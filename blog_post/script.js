let imgIndex = 0;
let autoSlide;

const imgSlider = document.getElementById("best_slider");

function slide(isNext) {
    imgIndex = isNext ? imgIndex + 1 : imgIndex - 1;

    imgIndex = imgIndex < 0 || imgIndex > 2 ? 0 : imgIndex;

    imgSlider.style.transform = `translateX(${-100 * (imgIndex)}%)`;
}

function startAutoSlide() {
    autoSlide = setInterval(() => slide(true), 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}


document.getElementById("prev").addEventListener("click", () => slide(false));
document.getElementById("next").addEventListener("click", () => slide(true));

imgSlider.addEventListener("mouseover", stopAutoSlide);
imgSlider.addEventListener("mouseout", startAutoSlide);

startAutoSlide();