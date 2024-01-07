const productsData = [
    {
        id: 0,
        image: "./images/s1.jpg",
        title: "Sunglasses 1",
        price: 100
    },
    {
        id: 1,
        image: "./images/s2.jpg",
        title: "Sunglasses 2",
        price: 120
    },
    {
        id: 2,
        image: "./images/s3.jpg",
        title: "Sunglasses 3",
        price: 90
    },
    {
        id: 3,
        image: "./images/s4.jpg",
        title: "Sunglasses 4",
        price: 180
    },
    {
        id: 4,
        image: "./images/s5.jpg",
        title: "Sunglasses 5",
        price: 300
    },
    {
        id: 5,
        image: "./images/s6.jpg",
        title: "Sunglasses 6",
        price: 150
    },

]  


const cardContainer = document.querySelector('.products')
const cartContainer = document.querySelector('.cart')
let cart = [];


const renderCart = () => {

    if(cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your Cart is Empty</p>'
    }
    else{
        cartContainer.innerHTML = '';

        cart.map((cartItem) => {
            cartContainer.innerHTML += 
        `<div class="item">
            <div class="image">
                <img src="${productsData[cartItem.id].image}" alt="">
            </div>
            <p class="item-name">${productsData[cartItem.id].title}</p>
            <div class="quantity">
                <i class="fa-solid fa-plus fa-2xs" onclick="increaseQuantity(${cartItem.id})"></i>
                <h5>${cartItem.quantity}</h5>
                <i class="fa-solid fa-minus fa-2xs" onclick="decreaseQuantity(${cartItem.id})"></i>
            </div>
            <h4 class="price">$ ${productsData[cartItem.id].price * cartItem.quantity}</h4>
            <a class="delete" onclick="removeFromCart(${cartItem.id})"><i class="fa-solid fa-trash-can"></i></a>
        </div>`
        })
    }
    
}



const renderCards = () => {
    productsData.map((product) => {
        cardContainer.innerHTML += 
    `<div class="item">
        <div class="image">
            <img src="${product.image}" alt="">
        </div>
        <p class="item-name">${product.title}</p>
        <h4 class="price">$ ${product.price}</h4>
        <button class="add" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>`
    })
}


const addToCart = (productId) => {
    if(cart.find((item)=> item.id === productId)) {
        increaseQuantity(productId)
    }
    else{
        cart.push({ id: productId, quantity: 1 })
        // console.log(cart)
    }

    renderCart();
}

const increaseQuantity = (productId) => {
    const element = cart.find((item) => item.id === productId);
    element.quantity += 1;

    renderCart();
}

const decreaseQuantity = (productId) => {
    const element = cart.find((item) => item.id === productId);
    if(element.quantity > 1) {
        element.quantity -= 1;
    }
    else{
        removeFromCart(element.id)
    }

    renderCart();
}


const removeFromCart = (productId) => {
    cart = cart.filter((item) => item.id !== productId)

    renderCart();
}


const clearCart = () => {
    cart = [];
    renderCart();
}


renderCart();
renderCards();
