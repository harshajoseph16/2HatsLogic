document.addEventListener("DOMContentLoaded", function () {

    const searchIcon = document.getElementById("searchIcon");
    const searchBox = document.getElementById("searchBox");

    searchIcon.addEventListener("click", function () {
        searchBox.classList.toggle("active");
    });

});