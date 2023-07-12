document.addEventListener("DOMContentLoaded", getProducts);

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.log("Error:", error);
  }
}

function displayProducts(products) {
  const container = document.querySelector(".container");

  products.forEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  });
}

function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.classList.add("product");

  const imageElement = document.createElement("img");
  imageElement.src = product.image;
  productElement.appendChild(imageElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = product.title;
  productElement.appendChild(titleElement);

  const priceElement = document.createElement("p");
  priceElement.textContent = `$${product.price}`;
  productElement.appendChild(priceElement);

  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.classList.add("add-to-cart");
  productElement.appendChild(addToCartButton);

  return productElement;
  
}

// getProducts()