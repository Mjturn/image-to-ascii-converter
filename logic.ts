const uploadImageButton = document.querySelector("#upload-image-button") as HTMLInputElement
const image = document.querySelector("#image") as HTMLImageElement

uploadImageButton.addEventListener("change", () => {
    image.src = URL.createObjectURL(uploadImageButton.files[0])
    image.style.display = "block"
})
