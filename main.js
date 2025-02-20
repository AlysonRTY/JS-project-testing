const data = response.data
console.log(data);

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

const arr = yugiohCards.map((yugiohCard) => {
    console.log(yugiohCard)
    const name = yugiohCard.name
    return name;
})
console.log(arr);
// for (let i = 0; i < dataNames.length; i++){
//     console.log(dataNames[i]);
// }
