document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.querySelector(".product-list");
    const reviewsContainer = document.querySelector(".review-list");

    // Sample products data
    const products = [
        { name: "Abstract Art", image: "images/product1.jpg", price: "$200" },
        { name: "Modern Art", image: "images/product2.jpg", price: "$300" },
        { name: "Vintage Art", image: "images/product3.jpg", price: "$150" },
        { name: "Nature Art", image: "images/product4.jpg", price: "$250" }
    ];

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        
        productsContainer.appendChild(productDiv);
    });

    // Sample reviews data (this would typically come from a server)
    const reviews = [
        { name: "John Doe", review: "Amazing artwork, very satisfied with my purchase!" },
        { name: "Jane Smith", review: "Great customer service and beautiful art pieces." },
        { name: "Alex Johnson", review: "The quality of the paintings exceeded my expectations." },
        { name: "Emily Davis", review: "Fast shipping and the artwork looks even better in person!" }
    ];
    
    reviews.forEach(review => {
        const reviewDiv = document.createElement("div");
        reviewDiv.className = "review";
        
        reviewDiv.innerHTML = `
            <h3>${review.name}</h3>
            <p>${review.review}</p>
        `;
        
        reviewsContainer.appendChild(reviewDiv);
    });
});
