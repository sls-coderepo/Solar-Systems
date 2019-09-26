const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


const planetList = document.querySelector("#planets")
 planets.forEach(planet => {
     planetList.innerHTML += `<section>${planet}</section>`
     
 })

