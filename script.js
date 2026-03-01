let cart = [];

function addToCart(name, price){
cart.push({name, price});
updateCart();
}

function updateCart(){
let cartItems = document.getElementById("cartItems");
let total = 0;
cartItems.innerHTML = "";

cart.forEach(item=>{
cartItems.innerHTML += `<div class="cart-item">${item.name} - ₹${item.price}</div>`;
total += item.price;
});

document.getElementById("totalPrice").innerText = total;
}

function toggleCart(){
document.getElementById("cartPanel").classList.toggle("active");
}

function orderWhatsApp(){
let message = "Order Details:%0A";
let total = 0;

cart.forEach(item=>{
message += `${item.name} - ₹${item.price}%0A`;
total += item.price;
});

message += `%0ATotal: ₹${total}`;

window.open(`https://wa.me/917261073685?text=${message}`);
}
