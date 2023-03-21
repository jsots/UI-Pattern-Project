let baseURL = "https://digimon-api.vercel.app/api/digimon"
let nextB = document.querySelector(".next")
let prevB = document.querySelector(".previous")
let randomB = document.querySelector(".random")
let containerDiv = document.querySelector(".container")
let digiInfo = document.querySelector(".digi-info")
let buttonContainer = document.querySelector(".button-container")
let prevIndex = 0

fetch(baseURL) 
    .then((res) => res.json())
    .then((res) => {
        let digiImg = document.querySelector(".digi-img")
        let digiName = document.querySelector(".digi-name")
        let digiLevel = document.querySelector(".digi-level")
        digiImg.src = `${res[0].img}`
        digiName.innerText = `${res[0].name}`
        digiLevel.innerText = `${res[0].level}`
    })


nextB.addEventListener("click", () => {
    fetch(baseURL) 
        .then((res) => res.json())
        .then((res) => {
            let digiImg = document.querySelector(".digi-img")
            let digiName = document.querySelector(".digi-name")
            let digiLevel = document.querySelector(".digi-level")
            if (prevIndex === res.length-1) {
                digiImg.src = `${res[0].img}`
                digiName.innerText = `${res[0].name}`
                digiLevel.innerText = `${res[0].level}`
                prevIndex = 0
            } else {
                digiImg.src = `${res[prevIndex+1].img}`
                digiName.innerText = `${res[prevIndex+1].name}`
                digiLevel.innerText = `${res[prevIndex+1].level}`
                prevIndex += 1
            }
        })
})

prevB.addEventListener("click", () => {
    fetch(baseURL) 
        .then((res) => res.json())
        .then((res) => {
            let digiImg = document.querySelector(".digi-img")
            let digiName = document.querySelector(".digi-name")
            let digiLevel = document.querySelector(".digi-level")
            if (prevIndex === 0) {
                digiImg.src = `${res[res.length-1].img}`
                digiName.innerText = `${res[res.length-1].name}`
                digiLevel.innerText = `${res[res.length-1].level}`
                prevIndex = res.length-1
            } else {
                digiImg.src = `${res[prevIndex-1].img}`
                digiName.innerText = `${res[prevIndex-1].name}`
                digiLevel.innerText = `${res[prevIndex-1].level}`
                prevIndex -= 1
            }
        })
})

randomB.addEventListener("click", () => {
    fetch(baseURL) 
        .then((res) => res.json())
        .then((res) => {
            let digiImg = document.querySelector(".digi-img")
            let digiName = document.querySelector(".digi-name")
            let digiLevel = document.querySelector(".digi-level")
            let rng = Math.floor(Math.random()*res.length+1)
            digiImg.src = `${res[rng].img}`
            digiName.innerText = `${res[rng].name}`
            digiLevel.innerText = `${res[rng].level}`
            prevIndex = rng
        })
})