
$(document).ready(function(){
    $('.draggable-slider').slick({
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        draggable: true, // Enable dragging to scroll
        infinite: true, // Infinite loop
        autoplay: true, // Set to true for autoplay
        autoplaySpeed: 2000,
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("live-text");
    const textToWrite = "Get Ready to be Entertained Beyond Imagination";
    let index = 0;

    function writeText() {
        textElement.textContent += textToWrite[index];
        index++;

        if (index < textToWrite.length) {
            setTimeout(writeText, 100); // Adjust the delay (in milliseconds) between each character
        }
    }

    writeText();
});