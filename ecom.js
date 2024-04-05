const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  
  signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
  });
  
  signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
  });
  
const productsContainer = document.getElementById('products');

const products = [
    { name: 'Product 1', price: 10, image: src="men.jpeg" },
    { name: 'Product 2', price: 20, image: src="men.jpeg" },
    { name: 'Product 3', price: 30, image: src="men.jpeg" },
    { name: 'Product 1', price: 10, image: src="men.jpeg" },
    { name: 'Product 2', price: 20, image: src="men.jpeg" },
    { name: 'Product 3', price: 30, image: src="men.jpeg" },
    { name: 'Product 1', price: 10, image: src="men.jpeg" },
    { name: 'Product 2', price: 20, image: src="men.jpeg" },
    { name: 'Product 3', price: 30, image: src="men.jpeg" },
    { name: 'Product 1', price: 10, image: src="men.jpeg" },
    { name: 'Product 2', price: 20, image: src="men.jpeg" },
    { name: 'Product 3', price: 30, image: src="men.jpeg" },
    { name: 'Product 1', price: 10, image: src="men.jpeg" },
    { name: 'Product 2', price: 20, image: src="men.jpeg" },
    { name: 'Product 3', price: 30, image: src="men.jpeg" }
];

function renderProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button class="buyNow" onclick="">Buy Now</button>
            <button class="button" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;

        productsContainer.appendChild(productElement);
    });
}

function addToCart(name, price) {
    alert(`Added ${name} to cart. Price: $${price}`);
}

renderProducts();
document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value;
    // Perform search action here with the search term
    alert("You searched for: " + searchTerm);
  });
  
  
