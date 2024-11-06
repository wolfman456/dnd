let search = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let monsterList = document.getElementById("monster-list");

searchButton.addEventListener("click", () => {
    console.log(search.value.toString())
    monsterList.innerHTML = search.value.toString()
})
