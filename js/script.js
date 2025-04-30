// Dynamic copyright
document.getElementById("year").textContent = new Date().getFullYear();


function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert('${productName} has been added to your cart!');
};


// Display cart items
if (document.getElementById("cart-items")) {
    const cartSection = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartSection.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
                <p>${item}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
                `;
            cartSection.appendChild(div);
        });
    }
}


// Remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Reload the page to update the cart display
};


// Clear cart
document.getElementById("clearCartBtn").addEventListener("click", () => {
    localStorage.removeItem("cart");
    location.reload(); // Reload the page to update the cart display
});