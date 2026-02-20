function showMessage() {
    alert("Thanks for checking out my portfolio!");
}
const images = document.querySelectorAll(".gallery-card img");

images.forEach(img => {
    img.addEventListener("click", () => {
        alert("You clicked an image!");
    });
});

