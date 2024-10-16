// Sample data for products (same as in app.js)
const products = [
    { id: 1, name: 'Cream Product 1', type: 'cream', price: 30, description: 'Description for Cream Product 1', image: 'public/images/cream1.jpg' },
    { id: 2, name: 'Liquid Product 1', type: 'liquid', price: 60, description: 'Description for Liquid Product 1', image: 'public/images/liquid1.jpg' },
    { id: 3, name: 'Syrup Product 1', type: 'syrup', price: 120, description: 'Description for Syrup Product 1', image: 'public/images/syrup1.jpg' },
    { id: 4, name: 'Cream Product 2', type: 'cream', price: 80, description: 'Description for Cream Product 2', image: 'public/images/cream2.jpg' },
    { id: 5, name: 'Liquid Product 2', type: 'liquid', price: 40, description: 'Description for Liquid Product 2', image: 'public/images/liquid2.jpg' },
];

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Find product by ID
const product = products.find(p => p.id === productId);

if (product) {
    document.getElementById('productName').innerText = product.name;
    document.getElementById('productDescription').innerText = product.description;
    document.getElementById('productPrice').innerText = `Price: $${product.price}`;
    document.getElementById('productImage').src = product.image; // Set product image
}

// Back button functionality
document.getElementById('backButton').onclick = function() {
    window.history.back();
};
