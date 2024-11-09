import { fetchApiData } from './dynamicData.js';

let search = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let monsterList = document.getElementById("monster-list");
let prev = document.getElementById("previous-button");
let next = document.getElementById("next-button");
let count = 0;
let data;


searchButton.addEventListener("click", () => {
    const searchTerm = search.value.trim(); // Get the search term value
    search.value = ""; // Clear the search input field

    fetchApiData(searchTerm).then((localData) => {
        console.log('Fetched data:', localData);

        // If there's valid data, update the monsterList or UI as needed
        if (localData !== undefined && localData.results.length > 0) {
            data = localData.results
            next.removeAttribute("disabled");
            monsterList.innerHTML = data[count].name;
        }
    });
});


next.addEventListener("click", () => {

        count++
        monsterList.innerHTML = data[count].name
        checkCount()

})
prev.addEventListener("click", () => {
        count--
        monsterList.innerHTML = data[count].name
        checkCount()
})

let checkCount = () => {
    if (count <= 0) {
        prev.disabled = true
    }
    if (count > 0) {
        prev.disabled = false
    }
    if (count === data.length - 1) {
        next.disabled = true
    }
   if (count < data.length - 1) {
       next.disabled = false
   }
}