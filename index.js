function showMessage() {
    alert("Thanks for checking out my portfolio!");
}
const images = document.querySelectorAll(".gallery-card img");

images.forEach(img => {
    img.addEventListener("click", () => {
        alert("You clicked an image!");
    });
});
document.getElementById("pdfUpload").addEventListener("change", function(e) {
    const file = e.target.files[0];
    if(file) {
        const url = URL.createObjectURL(file);
        document.getElementById("previewArea").innerHTML =
            `<embed src="${url}" width="100%" height="400px" type="application/pdf">`;
    }
});
const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

