const products = [
    {
        name: 'iPhone 13',
        prices: {
            amazon: '$799',
            ebay: '$780',
            walmart: '$790'
        }
    },
    {
        name: 'Samsung Galaxy S21',
        prices: {
            amazon: '$699',
            ebay: '$670',
            walmart: '$680'
        }
    },
    {
        name: 'Sony WH-1000XM4 Headphones',
        prices: {
            amazon: '$349',
            ebay: '$320',
            walmart: '$330'
        }
    }
];

function searchProduct() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';  // Clear previous results

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(input)
    );

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            
            const nameDiv = document.createElement('div');
            nameDiv.classList.add('product-name');
            nameDiv.textContent = product.name;

            const pricesDiv = document.createElement('div');
            pricesDiv.classList.add('prices');

            for (let platform in product.prices) {
                const priceDiv = document.createElement('div');
                priceDiv.classList.add('price');
                priceDiv.textContent = `${platform}: ${product.prices[platform]}`;
                pricesDiv.appendChild(priceDiv);
            }

            productDiv.appendChild(nameDiv);
            productDiv.appendChild(pricesDiv);
            resultsDiv.appendChild(productDiv);
        });
    } else {
        resultsDiv.textContent = 'No products found';
    }
}
