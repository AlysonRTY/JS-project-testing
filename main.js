// Global ------------------------------------------------------------------------------------------

const data = response.data
// console.log(data);
const yugiohCards = data
const cardsLevel = yugiohCards.level


// ------------------------------------------------------------------------------------------


// document.getElementByID------------------------------------------------------------------------------------------------------------------------


const datalist = document.getElementById("datalistOptions");
const exampleDataList = document.getElementById("exampleDataList");
const searchButton = document.getElementById("searchButton");
const result = document.getElementById("result");
const cardImage = document.getElementById("cardImage");
const cardType = document.getElementById("cardType");
const cardAttribute = document.getElementById("cardAttribute");
const cardLevel = document.getElementById("cardLevel");
const cardDisplay = document.getElementById('cardDisplay');

// ------------------------------------------------------------------------------------------------------------------------


// Searchbar (input field)-------------------------------------------------------------------------------------------

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

            const imageUrl = selectedCard.card_images[0].image_url;

        cardImage.src = imageUrl;
        cardImage.style.display = "block"; 
    } 

// console.log(cardImage);
// console.log(selectedCard);

});

// ------------------------------------------------------------------------------------------


const allAttributes = yugiohCards.map(card => card.attribute)//creates an array of all attribute values from the yugiohCards array
    .filter(attribute => attribute !== undefined);

const uniqueAttributes = [...new Set(allAttributes)]; //creates a Set of unique attributes (since Set automatically removes duplicates)
//converts the Set back into an array using the spread operator (...)
console.log(uniqueAttributes);

uniqueAttributes.forEach(attribute => {
  const optionElement = document.createElement("option");
  optionElement.value = attribute; // The value sent when the form is submitted
  optionElement.textContent = attribute; // The text displayed in the dropdown

  cardAttribute.appendChild(optionElement);
});



const filterUniqueCardsByAttribute = (attribute) => {
    return yugiohCards.filter(card => card.attribute === attribute);
};
const waterCards = filterUniqueCardsByAttribute('WATER');
console.log(waterCards);




const allLevels = yugiohCards.map(card => card.level) 
    .filter(level => level !== undefined);

const uniqueLevels = [...new Set(allLevels)]; //create a collection of unique levels, then convert it back to an array

const sortedUniqueLevels = uniqueLevels.sort((a, b) => a - b);  //sort the level from low to high

console.log('Unique Levels:', sortedUniqueLevels);

sortedUniqueLevels.forEach(level => {
    const optionElement = document.createElement("option");
    optionElement.value = level;
    optionElement.textContent = level;
    cardLevel.appendChild(optionElement);
})



// const sortedCards = yugiohCards.sort((a, b) => a.level - b.level);

// console.log('Cards sorted by level (lowest to highest):');
// sortedCards.forEach(card => {
//     console.log(`Name: ${card.name}, Level: ${card.level}`);
// });






const allTypes = yugiohCards.map(card => card.type);
const uniqueTypes = allTypes.filter((type, index, self) => self.indexOf(type) === index);

console.log(uniqueTypes);

uniqueTypes.forEach(type => {
    const optionElement = document.createElement("option");
    optionElement.value = type;
    optionElement.textContent = type;
    cardType.appendChild(optionElement);
})




// ----------------------------------------------------------------------
// Dropdown for Attributes----------------------------------------------------


const filterCardsByAttribute = (attribute) => {
    return yugiohCards.filter(card => card.attribute === attribute);
  };

  const displayCards = (cards) => {
    cardDisplay.innerHTML = '';

    // Loop through the filtered cards and create HTML for each card
    cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';

      // Access the first image in the `card_images` array
      if (card.card_images && card.card_images.length > 0) {
        const cardImage = document.createElement('img');
        cardImage.src = card.card_images[0].image_url;
        cardImage.alt = card.name;
        cardElement.appendChild(cardImage);
      }
      cardDisplay.appendChild(cardElement);
    });
  };

  searchButton.addEventListener('click', () => {
    const selectedAttribute = cardAttribute.value;

    const filteredCards = filterCardsByAttribute(selectedAttribute);

    displayCards(filteredCards);
  });

  
//----------------------------------------------------------------------





































// table------------------------------------------------------------

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





// ---------------------------------------------------------------
//   Testing------------------------------------------------------


// // const arr2 = yugiohCards.map((yugiohCard) => {
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
// console.log(cardLevel);
// console.log(cardAttribute);
// cardLevel.addEventListener("change", (e) => {
//     const selected = e.target.selected
//     console.log(selected);
// })

// cardAttribute.addEventListener("change", (e) => {
//     const selected = e.target.selected
//     console.log(selected);
// })
     // Add card name
    //   const cardName = document.createElement('p');
    //   cardName.textContent = card.name;
//   cardElement.appendChild(cardName);
    

// exampleDataList.addEventListener("keyup", (e) => {
//     const searchCard = e.target.value;
//         console.log(searchCard);
// });






