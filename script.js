let baseURL = "https://digimon-api.vercel.app/api/digimon";
let nextB = document.querySelector(".next");
let prevB = document.querySelector(".previous");
let randomB = document.querySelector(".random");
let digiInfo = document.querySelector(".digi-info");
let prevIndex = 0;

fetch(baseURL)
  .then((res) => res.json())
  .then((res) => {
    let digiImg = document.querySelector(".digi-img");
    let digiName = document.querySelector(".digi-name");
    let digiLevel = document.querySelector(".digi-level");
    let digiNo = document.querySelector("h3");
    digiImg.src = `${res[0].img}`;
    digiName.innerText = `${res[0].name}`;
    digiLevel.innerText = `${res[0].level}`;
    digiNo.innerText = "00" + `${prevIndex}`;
  });

nextB.addEventListener("click", () => {
  fetch(baseURL)
    .then((res) => res.json())
    .then((res) => {
      let digiImg = document.querySelector(".digi-img");
      let digiName = document.querySelector(".digi-name");
      let digiLevel = document.querySelector(".digi-level");
      let digiNo = document.querySelector("h3");
      if (prevIndex === res.length - 1) {
        digiImg.src = `${res[0].img}`;
        digiName.innerText = `${res[0].name}`;
        digiLevel.innerText = `${res[0].level}`;
        prevIndex = 0;
        digiNo.innerText = "00" + `${prevIndex}`;
      } else {
        digiImg.src = `${res[prevIndex + 1].img}`;
        digiName.innerText = `${res[prevIndex + 1].name}`;
        digiLevel.innerText = `${res[prevIndex + 1].level}`;
        prevIndex += 1;
        if (prevIndex < 10) {
          digiNo.innerText = "00" + `${prevIndex}`;
        } else if (prevIndex < 100) {
          digiNo.innerText = "0" + `${prevIndex}`;
        } else {
          digiNo.innerText = `${prevIndex}`;
        }
      }
    });
});

prevB.addEventListener("click", () => {
  fetch(baseURL)
    .then((res) => res.json())
    .then((res) => {
      let digiImg = document.querySelector(".digi-img");
      let digiName = document.querySelector(".digi-name");
      let digiLevel = document.querySelector(".digi-level");
      let digiNo = document.querySelector("h3");
      if (prevIndex === 0) {
        digiImg.src = `${res[res.length - 1].img}`;
        digiName.innerText = `${res[res.length - 1].name}`;
        digiLevel.innerText = `${res[res.length - 1].level}`;
        digiNo.innerText = `${prevIndex}`;
        prevIndex = res.length - 1;
        digiNo.innerText = `${prevIndex}`;
      } else {
        digiImg.src = `${res[prevIndex - 1].img}`;
        digiName.innerText = `${res[prevIndex - 1].name}`;
        digiLevel.innerText = `${res[prevIndex - 1].level}`;
        prevIndex -= 1;
        if (prevIndex < 10) {
          digiNo.innerText = "00" + `${prevIndex}`;
        } else if (prevIndex < 100) {
          digiNo.innerText = "0" + `${prevIndex}`;
        } else {
          digiNo.innerText = `${prevIndex}`;
        }
      }
    });
});

randomB.addEventListener("click", () => {
  fetch(baseURL)
    .then((res) => res.json())
    .then((res) => {
      let digiImg = document.querySelector(".digi-img");
      let digiName = document.querySelector(".digi-name");
      let digiLevel = document.querySelector(".digi-level");
      let rng = Math.floor(Math.random() * res.length + 1);
      let digiNo = document.querySelector("h3");
      digiImg.src = `${res[rng].img}`;
      digiName.innerText = `${res[rng].name}`;
      digiLevel.innerText = `${res[rng].level}`;
      prevIndex = rng;
      if (prevIndex < 10) {
        digiNo.innerText = "00" + `${prevIndex}`;
      } else if (prevIndex < 100) {
        digiNo.innerText = "0" + `${prevIndex}`;
      } else {
        digiNo.innerText = `${prevIndex}`;
      }
    });
});
