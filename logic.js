var image = document.querySelector("#image");
function displayImage() {
    var uploadImageButton = document.querySelector("#upload-image-button");
    uploadImageButton.addEventListener("change", function () {
        image.src = URL.createObjectURL(uploadImageButton.files[0]);
        image.style.display = "block";
    });
}
function convertImageToASCII() {
    var canvas = document.querySelector("#canvas");
    var context = canvas.getContext("2d");
    var asciiImageDiv = document.querySelector("#ascii-image");
    var convertButton = document.querySelector("#convert-button");
    convertButton.addEventListener("click", function () {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data, width = imageData.width, height = imageData.height;
        var asciiCharacters = "@#8&$%*o:;. ";
        var asciiText = [];
        for (var y = 0; y < height; y += 5) {
            var row = "";
            for (var x = 0; x < width; x += 5) {
                var index = (y * width + x) * 4;
                var red = data[index];
                var green = data[index + 1];
                var blue = data[index + 2];
                var average = (red + green + blue) / 3;
                var characterIndex = Math.floor((average / 255) * (asciiCharacters.length - 1));
                var character = asciiCharacters[characterIndex];
                row += "<span style=\"color: rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")\">").concat(character, "</span>");
            }
            asciiText.push(row);
        }
        var asciiImage = asciiText.join("\n");
        asciiImageDiv.innerHTML = asciiImage;
    });
}
displayImage();
convertImageToASCII();
