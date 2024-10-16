// Sample data for products
const products = [
    { id: 1, name: 'Cream Product 1', type: 'cream', price: 30, description: 'Description for Cream Product 1' },
    { id: 2, name: 'Liquid Product 1', type: 'liquid', price: 60, description: 'Description for Liquid Product 1' },
    { id: 3, name: 'Syrup Product 1', type: 'syrup', price: 120, description: 'Description for Syrup Product 1' },
    { id: 4, name: 'Cream Product 2', type: 'cream', price: 80, description: 'Description for Cream Product 2' },
    { id: 5, name: 'Liquid Product 2', type: 'liquid', price: 40, description: 'Description for Liquid Product 2' },
];

// Initialize product display
const itemContainer = document.getElementById('itemContainer');

function displayProducts(products) {
    itemContainer.innerHTML = ''; // Clear existing items
    products.forEach(product => {
        const itemBox = document.createElement('div');
        itemBox.classList.add('item-box');
        itemBox.setAttribute('data-type', product.type);
        itemBox.innerHTML = `
            <a href="product.html?id=${product.id}" class="product-link">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
            </a>
        `;
        itemContainer.appendChild(itemBox);
    });
}

// Filter items by category
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', filterItems);
});

// Function to filter products based on selected types
function filterItems() {
    const selectedTypes = [];
    document.querySelectorAll('.filter-checkbox:checked').forEach(checkbox => {
        selectedTypes.push(checkbox.value);
    });

    const filteredProducts = products.filter(product => {
        return selectedTypes.length === 0 || selectedTypes.includes(product.type);
    });

    displayProducts(filteredProducts);
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Sidebar toggle functionality for small screens
const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-hidden');
});

// Display initial products
displayProducts(products);
