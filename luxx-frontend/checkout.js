// =============================================
// LOAD ORDER SUMMARY FROM CART
// =============================================
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const itemsList = document.getElementById("items-list");
const checkoutTotal = document.getElementById("checkout-total");
const placeOrderBtn = document.getElementById("place-order-btn");
const payNowBtn = document.getElementById("pay-now-btn");

let total = 0;

if (cart.length === 0) {
  itemsList.innerHTML = "<p style='color:white'>Your cart is empty!</p>";
} else {
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    const div = document.createElement("div");
    div.classList.add("order-item");
    div.innerHTML = `
      <span>${item.name} x${item.quantity}</span>
      <span>Ksh. ${itemTotal}</span>
    `;
    itemsList.appendChild(div);
  });
}

checkoutTotal.textContent = total;

// =============================================
// PLACE ORDER BUTTON CLICK
// =============================================
placeOrderBtn.addEventListener("click", function(e) {
  e.preventDefault();
  e.stopPropagation();

  const name  = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill in all fields.");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  placeOrderBtn.disabled = true;
  placeOrderBtn.textContent = "Processing...";

  fetch("http://localhost:3000/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, items: cart, total })
  })
  .then(r => r.json())
  .then(result => {
    if (result.success) {
      localStorage.setItem("lastOrderNumber", result.data.orderNumber);
    } else {
      localStorage.setItem("lastOrderNumber", "LUX-" + Date.now());
    }
    showPaymentModal();
  })
  .catch(() => {
    localStorage.setItem("lastOrderNumber", "LUX-" + Date.now());
    showPaymentModal();
  });
});

// =============================================
// SHOW PAYMENT MODAL
// =============================================
function showPaymentModal() {
  placeOrderBtn.style.display = "none";
  payNowBtn.style.display = "block";
  document.getElementById("payment-modal").style.display = "flex";
}

// =============================================
// CLOSE MODALS
// =============================================
function closeModal() {
  document.getElementById("payment-modal").style.display = "none";
  placeOrderBtn.style.display = "block";
  placeOrderBtn.disabled = false;
  placeOrderBtn.textContent = "Place Order";
  payNowBtn.style.display = "none";
}

function closeFormModal() {
  document.getElementById("payment-form-modal").style.display = "none";
}

// =============================================
// SHOW PAYMENT FORM
// =============================================
function showForm(method) {
  document.getElementById("payment-modal").style.display = "none";
  document.getElementById("payment-form-modal").style.display = "flex";

  const formTitle  = document.getElementById("form-title");
  const formFields = document.getElementById("form-fields");

  if (method === "mpesa") {
    formTitle.textContent = "M-Pesa Payment";
    formFields.innerHTML = `<input type="tel" placeholder="M-Pesa Phone (e.g. 0712345678)"
      style="padding:10px; border-radius:6px; border:1px solid #ccc; width:100%; box-sizing:border-box;"/>`;
  } else if (method === "paypal") {
    formTitle.textContent = "PayPal Payment";
    formFields.innerHTML = `<input type="email" placeholder="PayPal Email"
      style="padding:10px; border-radius:6px; border:1px solid #ccc; width:100%; box-sizing:border-box;"/>`;
  } else if (method === "visa") {
    formTitle.textContent = "Visa Card Payment";
    formFields.innerHTML = `
      <input type="text" placeholder="Card Number (16 digits)"
        style="padding:10px; border-radius:6px; border:1px solid #ccc; width:100%; box-sizing:border-box; margin-bottom:8px;"/>
      <input type="text" placeholder="Cardholder Name"
        style="padding:10px; border-radius:6px; border:1px solid #ccc; width:100%; box-sizing:border-box; margin-bottom:8px;"/>
      <input type="text" placeholder="Expiry Date (MM/YY)"
        style="padding:10px; border-radius:6px; border:1px solid #ccc; width:100%; box-sizing:border-box; margin-bottom:8px;"/>
      <input type="text" placeholder="CVV"
        style="padding:10px; border-radius:6px; border:1px solid #ccc; width:100%; box-sizing:border-box;"/>
    `;
  }
}

// =============================================
// SIMULATE PAYMENT
// =============================================
function simulatePayment() {
  const orderNumber = localStorage.getItem("lastOrderNumber") || "LUX-ORDER";
  localStorage.removeItem("cart");
  localStorage.removeItem("lastOrderNumber");
  closeFormModal();
  alert("Payment Successful!\n\nOrder: " + orderNumber + "\n\nThank you for shopping at Luxx!\nDelivery in under 1 hour!");
  window.location.href = "index.html";
}