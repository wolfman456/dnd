import {fetchApiData} from './apiCall.js';

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

    fetchApiData("api/"+searchTerm).then((localData) => {
        if (localData !== undefined && localData.results.length > 0) {
            data = localData.results
            console.log(data[0].name);

            if (data.length - 10 >= 0) {
                console.log("count is 9")
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

    if(count + 10 <= data.length) {
        count = count +10
        startingCount += 10
        displayReturn()
    }else{
        count = ((data.length) - count) + count
    }

})
prev.addEventListener("click", () => {
    if(count - 10 <= data.length) {
        count-=10
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
    if (count === data.length) {
        next.disabled = true
    }
    if (count < data.length-count) {
        next.disabled = false
    }
    if (count === data.length) {
        next.disabled = true
    }
}

function displayReturn() {
    returnList.innerHTML =""
    console.log(startingCount)
    for (let i = startingCount; i <= count; i++) {
       const button =document.createElement(`button`)
        button.textContent = data[i].name
        button.addEventListener('click', ()=>{
            console.log(data[i].url);
        })
        checkCount()
        returnList.appendChild(button);
    }
}


function disableButtons(){
    prev.disabled = true
    next.disabled = true
}

disableButtons()