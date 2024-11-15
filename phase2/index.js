import {fetchApiData} from './apiCall.js';
import {displayClass} from "./displayClass.js";

let selectionList = document.getElementById("selection-list");
let submit = document.getElementById("submit");
let returnList = document.getElementById("Return-list");
let prev = document.getElementById("previous-button");
let next = document.getElementById("next-button");
let count = 0;
let data;
let startingCount = 0


submit.addEventListener("click", () => {
    const searchTerm = selectionList.value.trim();

    fetchApiData("/api/" + searchTerm).then((localData) => {
        if (localData !== undefined && localData.results.length > 0) {
            data = localData.results

            if (data.length - 10 >= 0) {
                count = 9
            } else {
                count = data.toString() - 1

            }
            next.removeAttribute("disabled");
            displayReturn()
        }
    });
});


next.addEventListener("click", () => {

    if (count + 10 <= data.length) {
        count = count + 10
        startingCount += 10
        displayReturn()
    } else {
        startingCount = count + 1
        count = ((data.length - 1) - count) + count
        displayReturn()
    }

})
prev.addEventListener("click", () => {
    if(count === data.length -1) {
        console.log("data length", data.length)
        count = count - ((data.length) - startingCount)
        console.log("count", count)
        startingCount = startingCount - 10
        console.log("startingCount", startingCount)
        displayReturn()
    }else if (count <= data.length) {
        count -= 10
        startingCount -= 10
        displayReturn()
    }
})

let checkCount = () => {
    if (count <= 9) {
        prev.disabled = true
    }
    if (count > 9) {
        prev.disabled = false
    }
    if (count === data.length - 1) {
        next.disabled = true
    }
    if (count < data.length - count) {
        next.disabled = false
    }
    if (count === data.length) {
        next.disabled = true
    }
}

function displayReturn() {
    returnList.innerHTML = ""
    for (let i = startingCount; i <= count; i++) {
        const button = document.createElement(`button`)
        button.textContent = data[i].name
        button.addEventListener('click', () => {
            displayChoice(data[i].url)
        })
        checkCount()
        returnList.appendChild(button);
    }
}


function disableButtons() {
    prev.disabled = true
    next.disabled = true
}

function displayChoice(data){
    fetchApiData(data).then((result) => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        displayClass(result)
    })
}

disableButtons()