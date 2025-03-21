let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

function searchProduct() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let category = document.querySelector("#search-bar select").value;
    window.location.href = `katalog.html?search=${encodeURIComponent(query)}&category=${encodeURIComponent(category)}`;
}

document.addEventListener("DOMContentLoaded", showSlides);
