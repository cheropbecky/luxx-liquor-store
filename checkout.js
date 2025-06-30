// === Initialize EmailJS with your user ID ===
emailjs.init("kS1T_oG5FI1CjSo8X");

const form = document.getElementById("checkout-form");
const itemsList = document.getElementById("items-list");
const checkoutTotal = document.getElementById("checkout-total");
const placeOrderBtn = document.getElementById("place-order-btn");
const payNowBtn = document.getElementById("pay-now-btn");

let cachedOrder = null; 

// === Function to Render Order Summary From localStorage Cart ===
function renderOrderSummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let itemDetails = "";
  itemsList.innerHTML = "";

  if (cart.length === 0) {
    itemsList.innerHTML = "<p>Your cart is empty.</p>";
    return { itemDetails: "", total: 0 };
  }

 
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    // Display each item visually
    itemsList.innerHTML += `
      <div class="order-item">
        <span>${item.name} (x${item.quantity})</span>
        <span>Ksh. ${itemTotal}</span>
      </div>
    `;
    itemDetails += `${item.name} (x${item.quantity}) - Ksh. ${itemTotal}\n`;
  });

  checkoutTotal.textContent = total;
  return { itemDetails, total };
}
// === Handle Form Submission ===
form.addEventListener("submit", function(e) {
  e.preventDefault();
  cachedOrder = renderOrderSummary(); 

  if (cachedOrder.total === 0) {
    alert("Your cart is empty.");
    return;
  }

  // Build email template parameters
  const templateParams = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    user_phone: document.getElementById("phone").value,
    order_summary: cachedOrder.itemDetails,
    total_price: cachedOrder.total
  };

  placeOrderBtn.disabled = true;

  // Send email via EmailJS
  emailjs.send("service_eoad0cg", "template_zl4dbah", templateParams)
    .then(() => {
      alert("Order placed successfully! Now click 'Pay Now' to proceed.");
      payNowBtn.style.display = "block";
      // Disable form inputs after order
      form.querySelectorAll("input, button[type='submit']").forEach(el => el.disabled = true);
    })
    .catch(error => {
      console.error("FAILED to send email...", error);
      alert("There was an error placing your order. Please try again.");
      placeOrderBtn.disabled = false;
    });
});

// === Handle "Pay Now" Button Click ===
payNowBtn.addEventListener("click", () => {
  if (!cachedOrder) cachedOrder = renderOrderSummary();
  document.getElementById("payment-modal").style.display = "flex";
});
function closeModal() {
  document.getElementById("payment-modal").style.display = "none";
}

function showForm(method) {
  closeModal();
  const formTitle = document.getElementById("form-title");
  const formFields = document.getElementById("form-fields");
  formFields.innerHTML = "";

  // Load inputs dynamically by payment type
  if (method === "mpesa") {
    formTitle.textContent = "Pay with M-Pesa";
    formFields.innerHTML = `
      <input type="tel" placeholder="M-Pesa Number" required />
      <input type="password" placeholder="M-Pesa PIN" required />
    `;
  } else if (method === "paypal") {
    formTitle.textContent = "Pay with PayPal";
    formFields.innerHTML = `
      <input type="email" placeholder="PayPal Email" required />
      <input type="password" placeholder="PayPal Password" required />
    `;
  } else if (method === "visa") {
    formTitle.textContent = "Pay with Visa / Card";
    formFields.innerHTML = `
      <input type="text" placeholder="Card Number" required />
      <input type="text" placeholder="Cardholder Name" required />
      <input type="text" placeholder="Expiry Date (MM/YY)" required />
      <input type="password" placeholder="CVV" required />
    `;
  }

  document.getElementById("payment-form-modal").style.display = "flex";
}
function closeFormModal() {
  document.getElementById("payment-form-modal").style.display = "none";
}

// === Handle Payment Simulation Submission ===
document.getElementById("payment-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Payment simulated successfully. Thank you for your order!");

  localStorage.removeItem("cart");
  window.location.href = "shop.html";
});

cachedOrder = renderOrderSummary();
