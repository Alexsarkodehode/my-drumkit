const drumkitDiv = document.getElementById("drumkit")
const buttonEl = document.createElement("button")
const audioEl = document.createElement("audio")
/* let img = new Image(); img. src = URL; */



    buttonEl.textContent = "Play" 
    document.body.appendChild(buttonEl)
    audioEl.src = "../playlist/chillin.wav"

buttonEl.addEventListener("click", (Event) => {
    audioEl.play()
})

buttonEl.addEventListener("pointerUp", ()=>{
    audioEl.play()
    buttonEl.classList.remove("btn-down")
})

buttonEl.addEventListener("pointerDown", ()=>{
    audioEl.pause()
})

const sounds = {
    folder: "./playlist/", soundFiles: [
    "chilling.wav",
    "pluck.loop.wav",
    "sandeep.wav",
    "smooth.guitar.wav",
    "timbo.drumline.wav",
    "trap.beat.wav",

]}


const drumkit = document.createElement("drumkitDiv")
const buttonEl = document.createElement("button")
const audioEl = document.createElement("audio")

