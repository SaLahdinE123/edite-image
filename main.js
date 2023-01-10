let blur = document.getElementById("blur");
let brightness = document.getElementById("brightness");
let contrast = document.getElementById("contrast");
let grayscale = document.getElementById("grayscale");
let saturate = document.getElementById("saturate");
let upload = document.getElementById("upload")
let image = document.getElementById("image")
let filters = document.querySelectorAll("div input")
let reset = document.getElementById("reset")

filters.forEach(filter => {
    filter.addEventListener("input" , ()=>{
        image.style.filter = `
            blur(${blur.value}px)
            brightness(${brightness.value}%)
            contrast(${contrast.value}%)
            grayscale(${grayscale.value}%)
            saturate(${saturate.value}%)
        `
    })
});
reset.addEventListener("click" , ()=>{
    filters.forEach(filter => {
            image.style.filter = 'none'
            blur.value = 0
            brightness.value = 100
            contrast.value = 100
            grayscale.value = 0
            saturate.value = 100
    });
})



upload.onchange = ()=>{
    let file = new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload = ()=>{
        image.src = file.result
        // image.style.display = "none"
    }
    
}

