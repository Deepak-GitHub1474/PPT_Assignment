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
        productElement.setAttribute('data-product-id', product.id);
        container.appendChild(productElement);
    });
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.addEventListener('click', () => openSingleProductPage(product.id));
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

function openSingleProductPage(productId) {
    localStorage.setItem('productId', productId); // Store product ID in LocalStorage
    window.location.href = 'single-product.html'; // Navigate to single product page
}

function openSingleProductPage(productId) {
    window.location.href = `single-product.html?id=${productId}`;
}

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
    titleElement.classList.add('cart-item-details');
    cartItemElement.appendChild(titleElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `$${product.price}`;
    priceElement.classList.add('cart-item-details', 'cart-item-price');
    cartItemElement.appendChild(priceElement);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.classList.add('cart-item-button');
    cartItemElement.appendChild(buyButton);

    return cartItemElement;
}
