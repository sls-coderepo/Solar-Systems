const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetList = document.querySelector("#planets")
 planets.forEach(planet => {
     planetList.innerHTML += `<section>${planet}</section>`
     
 })

 /*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

planets.map(planet => {
    console.log(planet.charAt(0).toUpperCase() + planet.substr(1))
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const newArray = planets.filter(planet => {
    if(planet.includes("e")){
        console.log(planet)
    }
})