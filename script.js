// Get references to the HTML elements//
let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');

// Product details
const products = [
  { id: 1, name: 'Coffee', price: 15000 },
  { id: 2, name: 'Tea', price: 5000 },
  { id: 3, name: 'Cake', price: 10000 }
];

// Add product to cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productId = parseInt(e.target.closest('.product').getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  });
});

// Update the cart display
function updateCart() {
  // Update cart count
  cartCount.textContent = cart.length;

  // Update cart items display
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${item.name} - Rp.${item.price.toFixed(2)}`;
    cartItems.appendChild(cartItem);
  });
}

// Handle checkout
checkoutBtn.addEventListener('click', () => {
  let total = 0;
  cart.forEach(item => total += item.price);
  alert(`Your total is Rp.${total.toFixed(2)}. Thank you for your purchase!`);
  cart = [];  // Clear cart after checkout
  updateCart(); // Update cart display
});

