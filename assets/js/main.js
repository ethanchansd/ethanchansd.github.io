//Animating Scroll
$(document).on('click', 'a[href^="#home"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

$(document).on('click', 'a[href^="#about"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

$(document).on('click', 'a[href^="#projects"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

$(document).on('click', 'a[href^="#contact"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// Modal Image Gallery
// function onClick(element) {
//     document.getElementById("img01").src = element.src;
//     document.getElementById("modal01").style.display = "block";
//     var captionText = document.getElementById("caption");
//     captionText.innerHTML = element.alt;
// }


// Toggle between showing and hiding the sidebar when clicking the menu icon
// var mySidebar = $('#mySidebar')[0]; //document.getElementById("mySidebar")

function w3_open() {
    $('#mySidebar').attr('style','display: block');
}

// Close the sidebar with the close button
function w3_close() {
    $('#mySidebar').attr('style','display: none');
}

