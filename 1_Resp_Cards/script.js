
// Color1: 'rgb(205, 255, 223)'
// Color2: 'rgb(255, 246, 209)'
// Color3: 'rgb(206, 191, 255)'
// Color4: 'rgb(255, 209, 191)'
// Color5: 'rgb(192, 253, 255)'
// Color6: 'rgb(255, 188, 193)'


const arrayData = [
    {
        id: 1,
        imageUrl: "./images/a1.jpg",
        Heading: "London Bridge",
        bgColor: "rgb(205, 255, 223)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 2,
        imageUrl: "./images/a2.jpg",
        Heading: "Burj Khalifa",
        bgColor: "rgb(255, 246, 209)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 3,
        imageUrl: "./images/a3.jpg",
        Heading: "Taj Mahal",
        bgColor: "rgb(206, 191, 255)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 4,
        imageUrl: "./images/a4.jpg",
        Heading: "Matsumoto Castle",
        bgColor: "rgb(255, 209, 191)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 5,
        imageUrl: "./images/a5.jpg",
        Heading: "Lotus Temple",
        bgColor: "rgb(192, 253, 255)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 6,
        imageUrl: "./images/a6.jpg",
        Heading: "Tokyo Tower",
        bgColor: "rgb(255, 188, 193)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
]


const cardContainer = document.querySelector('.container')

const functionCards = () => {
    arrayData.map((data) => {
        // console.log(data)
        cardContainer.innerHTML += `
        <div class="card" style="background-color: ${data.bgColor}">
            <div class="image">
                <img src="${data.imageUrl}" alt="">
            </div>
            <h2>${data.Heading}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?</p>

            <button>Read More</button>
        </div>`
    })
}

functionCards()