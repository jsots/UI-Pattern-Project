let baseURL = "https://digimon-api.vercel.app/api/digimon"
let nextB = document.querySelector(".next")
let previousB = document.querySelector(".previous")
let randomB = document.querySelector(".random")
let containerDiv = document.querySelector(".container")
let digiInfo = document.querySelector(".digi-info")
let buttonContainer = document.querySelector(".button-container")

fetch(baseURL) 
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            let digiImg = document.querySelector(".digi-img")
            let digiName = document.querySelector(".digi-name")
            console.log(digiName)
            console.log(res[0].name)
            let digiLevel = document.querySelector(".digi-level")
            digiImg.src = `${res[0].img}`
            digiName.innerText = res[0].name
            digiLevel.innerText = `${res[0].level}`
        })


// nextB.addEventListener("click", )