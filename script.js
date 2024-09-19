let products = [
  { name: "Laptop", price: 1099.99, description: "Everything you need on the go" },
  { name: "Smartphone", price: 899.99, description: "Pocketsized computer everywhere you go" },
  { name: "Headphones", price: 49.99, description: "Surround sound audio experience" }
  ];
  
function displayProducts() {
  let productContainer = document.getElementById("product-container");
    products.forEach(product => {
    let productCard = document.createElement("div");
      productCard.className = "product-card";
    let productName = document.createElement("h2");
      productName.textContent = product.name;    
    let productPrice = document.createElement("p");
      productPrice.textContent = "Price: $" + product.price;
    let productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productDescription); 
      productContainer.appendChild(productCard);
    });
  }
  
  window.addEventListener("load", displayProducts);