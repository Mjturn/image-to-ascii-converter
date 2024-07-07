const image = document.querySelector("#image") as HTMLImageElement

function displayImage() {
    const uploadImageButton = document.querySelector("#upload-image-button") as HTMLInputElement

    uploadImageButton.addEventListener("change", () => {
        image.src = URL.createObjectURL(uploadImageButton.files[0])
        image.style.display = "block"
    })
}

function convertImageToASCII() {
    const convertButton = document.querySelector("#convert-button")

    convertButton.addEventListener("click", () => {
    })
}

displayImage()
convertImageToASCII()
