// products.js
const productsData = [
    { name: "Non-Fat Milk, 1 Gal", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
];

function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <a href="${product.name}.html"><h3>${product.name}</h3></a>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;

    return productCard;
}

function initProducts() {
    const productsContainer = document.getElementById("products");

    productsData.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

document.addEventListener("DOMContentLoaded", initProducts);

