const products = [
    { id: 1, name: "Laptop", quantity: 9, price: 1000 },
    { id: 2, name: "Smartphone", quantity: 23, price: 699 },
    { id: 3, name: "Tablet", quantity: 5, price: 899 },
    { id: 4, name: "PC", quantity: 6, price: 1200 }

];



// Sort by the product name

function sortProductsByName() {
    products.sort((product1, product2) => product1.name.localeCompare(product2.name)); 
}

// Print all products in the list
function printAllProducts() {
    products.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Quantity: ${product.quantity}, Price: $${product.price}`);
    });
}

// Add a new product to head of the list
function addProductToHead(newProduct) {
    products.unshift(newProduct);
}

// Add a new product to tail of the list
function addProductToTail(newProduct) {
    products.push(newProduct);
}

// Search products by the product name
function searchProductByName(name) {
    return products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
}

// Remove the product by the product ID
function removeProductById(id) {
    const index = products.findIndex(product => product.id === id); 
    if (index !== -1) { 
        products.splice(index, 1); 
    }
}



// Edit the product detail by the product ID
function editProductById(id, updatedProduct) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
    }
}


console.log("Original List:");
printAllProducts();

console.log("\nSorted by name list:");
sortProductsByName();
printAllProducts();

console.log("\nAdding Product to Head:");
addProductToHead({ id: 6, name: "Mouse", quantity: 18, price: 499 });
printAllProducts();

console.log("\nAdding Product to Tail:");
addProductToTail({ id: 5, name: "Keyboard", quantity: 143, price: 34 });
printAllProducts();

console.log("\nSearching for 'PC':");
console.log(searchProductByName("PC"));

console.log("\nRemoving Product with ID 1:");
removeProductById(1);
printAllProducts();

console.log("\nEditing Product with ID 3:");
editProductById(3, { name: "Updated Tablet", quantity: 4, price: 350 });
printAllProducts();