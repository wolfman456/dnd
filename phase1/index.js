import data from "./data.js";

let search = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let monsterList = document.getElementById("monster-list");

searchButton.addEventListener("click", () => {
    console.log(search.value.toString())
    console.log(data)
    monsterList.innerHTML = search.value.toString()

})

