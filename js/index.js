// Sample product data
const productsData = [
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },
    { name: "Coming Soon!", image: "/images/Noah Grocery Logo.png", price: "" },


    // Add more products as needed
];

// Function to dynamically create product cards
function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;

    return productCard;
}

