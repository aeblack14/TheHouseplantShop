
// JavaScript for shopping page
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productCard = event.target.closest('.product-card');
    const productName = productCard.querySelector('h3').innerText;
    const productPrice = parseFloat(productCard.querySelector('p').innerText.substring(1));
    
    // You would typically add the product to the shopping cart here
    // For now, let's just log the product details
    console.log(`Added to cart: ${productName} - $${productPrice}`);
}


// shopping cart

const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
let itemCount = 0;

cartIcon.addEventListener('click', openCart);

function openCart() {
    // Simulate opening the cart or redirecting to the cart/checkout page
    // In this example, we'll just update the cart count
    itemCount++;
    cartCount.innerText = itemCount;
}
