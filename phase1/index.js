import data from "./data.js";

let search = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let monsterList = document.getElementById("monster-list");
let prev = document.getElementById("previous-button");
let next = document.getElementById("next-button");
let count = 0


searchButton.addEventListener("click", () => {
    console.log(search.value.toString())
    console.log(data)
    if (data !== null && data !== undefined) {
        next.removeAttribute("disabled");
        monsterList.innerHTML = data.results[count].name
    }

})

next.addEventListener("click", () => {
    if (data.results !== null && data.results !== undefined && count !== data.results.length-1) {
        count++
        monsterList.innerHTML = data.results[count].name
        checkCount()
    }
})
prev.addEventListener("click", () => {
    if (data.results !== null && data.results !== undefined && count !== data.results.length-1) {
        count--
        monsterList.innerHTML = data.results[count].name
        checkCount()
    }
})

let checkCount = () => {
    if (count<=0){
        prev.disabled = true
    }else if(count>0){
        prev.removeAttribute("disabled")
    }else if(count=== data.results.length-1){
        next.disabled = true
    }
}
