const cart = [];

document.addEventListener('DOMContentLoaded', getProducts);

async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.log('Error:', error);
    }
}

function displayProducts(products) {
    const container = document.querySelector('.container');

    products.forEach(product => {
        const productElement = createProductElement(product);
        container.appendChild(productElement);
    });
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    productElement.appendChild(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = product.title;
    productElement.appendChild(titleElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `$${product.price}`;
    productElement.appendChild(priceElement);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('add-to-cart');
    addToCartButton.addEventListener('click', () => addToCart(product));
    productElement.appendChild(addToCartButton);

    return productElement;
}

// Cart functionality
function addToCart(product) {
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartContainer = document.querySelector('.cart-container');
    const cartTitleElement = document.querySelector('.cart-title');
    cartContainer.innerHTML = '';
    cartContainer.appendChild(cartTitleElement);

    cart.forEach(product => {
        const cartItemElement = createCartItemElement(product);
        cartContainer.appendChild(cartItemElement);
    });
}

function createCartItemElement(product) {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    cartItemElement.appendChild(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = product.title;
    cartItemElement.appendChild(titleElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `$${product.price}`;
    cartItemElement.appendChild(priceElement);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.classList.add('cart-item-button');
    cartItemElement.appendChild(buyButton);

    return cartItemElement;
}
