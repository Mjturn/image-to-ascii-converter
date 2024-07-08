const image = document.querySelector("#image") as HTMLImageElement

function displayImage() {
    const uploadImageButton = document.querySelector("#upload-image-button") as HTMLInputElement

    uploadImageButton.addEventListener("change", () => {
        image.src = URL.createObjectURL(uploadImageButton.files[0])
        image.style.display = "block"
    })
}

function convertImageToASCII() {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement
    const context = canvas.getContext("2d")

    const asciiImageDiv = document.querySelector("#ascii-image") as HTMLDivElement
    
    const convertButton = document.querySelector("#convert-button")

    convertButton.addEventListener("click", () => {
        canvas.width = image.width
        canvas.height = image.height
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
    
        const { data, width, height } = imageData
        const asciiCharacters = "@#8&$%*o:;. "
        const asciiText = []
        
        for(let y = 0; y < height; y += 5) {
            let row = ""
            for (let x = 0; x < width; x += 5) {
                const index = (y * width + x) * 4
                const red = data[index]
                const green = data[index + 1]
                const blue = data[index + 2]
                const average = (red + green + blue) / 3
                const characterIndex = Math.floor((average / 255) * (asciiCharacters.length - 1))
                const character = asciiCharacters[characterIndex]
                row += `<span style="color: rgb(${red}, ${green}, ${blue})">${character}</span>`
            }
            
            asciiText.push(row)
        }
        
        const asciiImage = asciiText.join("\n")
        asciiImageDiv.innerHTML = asciiImage
    })
}

displayImage()
convertImageToASCII()
