const cardsData = [
    {
        "imgUrl": "./image/a11.avif",
        "productName": "Slim Fit Round-Neck Top",
        "price": "$71"
    },
    {
        "imgUrl": "./image/a10.avif",
        "productName": "Olive Green Shift Dress",
        "price": "$123"
    },
    {
        "imgUrl": "./image/a8.webp",
        "productName": "Puff Sleeves Printed Top",
        "price": "$99"
    },
    {
        "imgUrl": "./image/a1.jpg",
        "productName": "Mini A-Line Dress",
        "price": "$89"
    },
    {
        "imgUrl": "./image/a2.jpg",
        "productName": "Girl's Solid Crop Top",
        "price": "$76"
    },
    {
        "imgUrl": "./image/a4.jpg",
        "productName": "Abstract Printed Collared Top",
        "price": "$92"
    },
    {
        "imgUrl": "./image/a5.jpg",
        "productName": "Stylish Fancy Printed Shirt",
        "price": "$68"
    },
    {
        "imgUrl": "./image/a6.jpg",
        "productName": "Turtle Neck Sweater Dress",
        "price": "$110"
    },
    {
        "imgUrl": "./image/a9.webp",
        "productName": "Straight Mock Neck Top",
        "price": "$84"
    },
    {
        "imgUrl": "./image/a3.jpg",
        "productName": "Black High Low Dress",
        "price": "$105"
    }
]

const cardsContainer = document.querySelector(".swiper-wrapper")
const renderCard = () => {
    cardsData.map((card)=> {
        cardsContainer.innerHTML += 
           `<div class="swiper-slide">
                <div class="image">
                    <img src="${card.imgUrl}" alt="">
                </div>
                <div class="data">
                    <div class="brand">
                        <span class="brand-name">Fashion</span>
                        <span class="price">${card.price}</span>
                    </div>
                    <p class="item-name">${card.productName}</p>
                </div>
              </div>`
    })
}
renderCard();