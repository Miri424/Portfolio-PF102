    import { setLocalStorage, getLocalStorage } from "./helper.js";
    const products = [
        {
        id: 1,
        title: "Backpack Leather Bag",
        description: "Leather Bag with luxurious physical design",
        price: 130.0,
        oldPrice: 340.0,
        isNew: true,
        discount: null,
        rating: 4.8,
        image: "./assets/imgs/backpack-leather.jpg",
        },
        {
        id: 2,
        title: "Shoulder Bag",
        description: "Leather Bag for everyday use...",
        price: 130.0,
        oldPrice: 340.0,
        isNew: false,
        discount: 30,
        rating: 4.5, 
        image: "./assets/imgs/shoulder-bag.jpg",
        },
        {
        id: 3,
        title: "Classic Shoulder Bag",
        description: "Stylish leather bag for daily use",
        price: 130.0,
        oldPrice: 340.0,
        isNew: false,
        discount: 30,
        rating: 4.7,
        image: "./assets/imgs/classic-shoulder-bag.jpg",
        },
        {
        id: 4,
        title: "Luxury Shoulder Bag",
        description: "Elegant leather bag with luxurious design",
        price: 130.0,
        oldPrice: 340.0,
        isNew: true,
        discount: null,
        rating: 5.0, 
        image: "./assets/imgs/luxury-shoulderbag.jpg",
        },
        {
        id: 5,
        title: "Handmade Clutch Bag",
        description: "Luxurious clutch bag made from leather",
        price: 130.0,
        oldPrice: 340.0,
        isNew: false,
        discount: 30,
        rating: 4.6,
        image: "./assets/imgs/clutch-bag.jpg", 
        },
        {
        id: 6,
        title: "Classic Backpack",
        description: "Durable and stylish leather backpack",
        price: 130.0,
        oldPrice: 340.0,
        isNew: true,
        discount: null,
        rating: 4.9, 
        image: "./assets/imgs/classic-backpack.jpg", 
        },
    ];


    function renderProducts(containerId, products) {
        const container = document.getElementById(containerId);
        const favorites = getLocalStorage('favorites') || {};  // Retrieve favorites from localStorage
    
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
    
            const isFavorite = !!favorites[product.id];
    
            card.innerHTML = `
                ${product.isNew ? '<span class="badge">New</span>' : ''}
                ${product.discount ? `<span class="badge discount">-${product.discount}%</span>` : ''}
                <i class="favorite-icon fa ${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart" data-id="${product.id}"></i>
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="price-container">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="rating">Rating: ${product.rating} ⭐</div>
                <button class="addToCart">Add to Cart</button>
            `;
            container.appendChild(card);
        });
    
        // Event listener for favorite icon
        document.querySelectorAll('.favorite-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const productId = e.target.getAttribute('data-id');
                const favorites = getLocalStorage('favorites') || {}; // Get the latest favorites
    
                if (favorites[productId]) {
                    delete favorites[productId];  // Remove from favorites if already present
                } else {
                    favorites[productId] = true;  // Add to favorites if not present
                }
    
                // Save updated favorites back to localStorage
                setLocalStorage('favorites', favorites);
    
                // Toggle icon class based on favorites state
                const iconClass = e.target.classList;
                if (favorites[productId]) {
                    iconClass.add('fa-solid');  // Make it solid (filled heart)
                    iconClass.remove('fa-regular');  // Remove regular (empty heart)
                } else {
                    iconClass.add('fa-regular');  // Make it regular (empty heart)
                    iconClass.remove('fa-solid');  // Remove solid (filled heart)
                }
            });
        });
    }
    
    function renderDiscountProducts(containerId, products) {
        const container = document.getElementById(containerId);
        const favorites = getLocalStorage('favorites') || {}; // Ensure you're checking the current state of favorites
    
        products.filter(product => product.discount).forEach(product => {
            const isFavorite = !!favorites[product.id];
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                ${product.isNew ? '<span class="badge">New</span>' : ''}
                ${product.discount ? `<span class="badge discount">-${product.discount}%</span>` : ''}
                <i class="favorite-icon fa ${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart" data-id="${product.id}"></i>
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="price-container">
                    <span class="price">$${(product.price - (product.price * product.discount / 100)).toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="rating">Rating: ${product.rating} ⭐</div>
            `;
            container.appendChild(card);
        });
    }
    
~    renderDiscountProducts('discount-products', products);
    renderProducts('featured-products', products);
    renderProducts('bestseller-products', products);