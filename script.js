function updateNav() {
  document.querySelector('nav').innerHTML = `
    <a href="index.html">Home</a>
    <a href="products.html">Shop</a>
    <a href="cart.html">Cart (${JSON.parse(localStorage.getItem('cart') || '[]').length})</a>
    <a href="wishlist.html">Wishlist (${JSON.parse(localStorage.getItem('wishlist') || '[]').length})</a>
    <a href="contact.html">Contact</a>
  `;
}

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
  updateNav();
}

function addToWishlist(name, price) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  wishlist.push({name, price});
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert('Added to wishlist!');
  updateNav();
}

// Call on load
updateNav();
