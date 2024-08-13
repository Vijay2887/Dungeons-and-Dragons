//fetching facts from dog API


let myButton = document.getElementById("myButton");
let resultLine = document.getElementById("resultLine");


async function getFact() {
    try {

        let url = "";
        let resultArray = [];
        resultLine.textContent = "";
        let mySearch = document.getElementById("mySearch").value;
        url = "https://www.dnd5eapi.co/api" + '/' + mySearch;
        console.log(url);
        console.log(mySearch.value);
        let response = await fetch(url);
        let data = await response.json();
        let dataLength = data.results.length;
        console.log(dataLength);
        for (let i = 0; i < dataLength; i++) {
            console.log(data.results[i].name);
            resultArray.push(data.results[i].name);
        }

        resultLine.textContent = resultArray.join("\n");
    }
    catch (error) {
        console.log(error);
        resultLine.textContent = "No Such Details Available";
    }
}

myButton.addEventListener("click", getFact);