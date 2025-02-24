const data = response.data
// console.log(data);

// const tbody = document.getElementById("tbody")

// for (let i = 0; i < data.length; i++){
//     // console.log(data[i])
//     const tr = document.createElement("tr")
//     const td1 = document.createElement("td")
//     const td2 = document.createElement("td")
//     const td3 = document.createElement("td")
//     const td4 = document.createElement("td")
//     const td5 = document.createElement("td")

//     td1.innerHTML = data[i].name
//     td2.innerHTML = data[i].type
//     td3.innerHTML = data[i].attribute
//     td4.innerHTML = data[i].desc
//     // td5.innerHTML = ("src", data[i].card_images.image_url)  //need to be in src

//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     tr.appendChild(td4)
//     // tr.appendChild(td5)

//     tbody.appendChild(tr)
    
// }
const yugiohCards = data
const imageArr = yugiohCards.card_images

const searchbar = document.getElementById("exampleDataList")

searchbar.addEventListener("keyup", (e) => {
    const searchCard = e.target.value;
        console.log(searchCard);
});


const datalist = document.getElementById("datalistOptions");
const exampleDataList = document.getElementById("exampleDataList");
const searchButton = document.getElementById("searchButton");
const result = document.getElementById("result");
const cardImage = document.getElementById("cardImage");
const cardType = document.getElementById("cardType");
const cardAttribute = document.getElementById("cardAttribute");
const cardLevel = document.getElementById("cardLevel");

yugiohCards.forEach(yugiohCard => {
    const option = document.createElement("option");
    option.value = yugiohCard.name;
    datalist.appendChild(option);
});


searchButton.addEventListener("click", () => {
    // Get the selected card from the input field
    const selectedCardName = exampleDataList.value;

    // Find the selected card in the array
    const selectedCard = yugiohCards.find(yugiohCard => yugiohCard.name === selectedCardName);

    if (selectedCard) {
        result.textContent = `DRAWWWWWW ${selectedCard.name}`;

            const imageUrl = selectedCard.card_images[0].image_url_small;

        // Display the card image
        cardImage.src = imageUrl;
        cardImage.style.display = "block"; 
    } else {
        result.textContent = "Card not found.";
        cardImage.style.display = "none";
    }

// console.log(cardImage);
// console.log(selectedCard);

});













// const arr2 = yugiohCards.map((yugiohCard) => {
//     console.log(yugiohCard);
//     const level = yugiohCard.level
//     return level;
// })
// console.log(arr2);

// yugiohCards.forEach((e) => {
//     console.log(e);

// })

// const arr3 = yugiohCards.map((yugiohCard) => {
//     return {
//         level: yugiohCard.level,
//         attribute: yugiohCard.attribute,
//         type: yugiohCard.type
//     } 
// })
// console.log(arr3);

// const arr4 = yugiohCards.filter((yugiohCard) => {
//     return yugiohCard.level > 10

// })
// console.log(arr4);

// const arr5 = yugiohCards.map((e) => {
//     return e.type;
// })
// console.log(arr5);


// const arr6 = yugiohCards.map((e) => {
//     return e.attribute;
// })
// console.log(arr6);



// const arr6 = yugiohCards.filter((e, index) =>
//     yugiohCards.indexOf(e.attribute) === index);
// console.log(arr6); try to filter for unique items





// yugiohCards.forEach(e => {
//     console.log(e);
// })



// for (let i = 0; i < dataNames.length; i++){
//     console.log(dataNames[i]);
// }


// const arr10 = yugiohCards.map((yugiohCard) => {
//     return {
//         level: yugiohCard.level,
//         attribute: yugiohCard.attribute,
//         type: yugiohCard.type
//     } 
// })
// console.log(arr10);

// const card1 = yugiohCards.attribute
// const card2 = yugiohCards.level
// const card3 = yugiohCards.type

// const arr10 = yugiohCards.map((yugiohCard) => {
//     if (yugiohCard.attribute !== undefined) {

    
//         result += yugiohCard.attribute;
//     }
// })
// console.log(arr10);



// const unique = cardAtt.filter((value, index, self) =>  self.indexOf(value) === index)

// const unique2 = cardLvl.filter((value, index, self) => self.indexOf(value) === index)


// const unique3 = card1.filter((value, index, self) => { self.indexOf(value) === index
//     if (value !== undefined) {
//         result += value;
//      }
// })
// console.log(unique3);

