import React, { useEffect, useState } from 'react';

export default function ProductDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div className="container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-img-container">
            <img src={product.image} alt={product.title} />
          </div>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <div className="btns-container">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}
