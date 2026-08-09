import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";
import Footer from "../components/Footer";

function readCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export default function Checkout() {
  const navigate = useNavigate();
  const [cart] = useState(readCart());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [placing, setPlacing] = useState(false);
  const [showPlaceOrder, setShowPlaceOrder] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // =============================================
  // PLACE ORDER BUTTON CLICK
  // (generated locally — no backend needed)
  // =============================================
  function handlePlaceOrder(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setPlacing(true);

    localStorage.setItem("lastOrderNumber", "LUX-" + Date.now());
    openPaymentModal();
  }

  function openPaymentModal() {
    setShowPlaceOrder(false);
    setShowPaymentModal(true);
  }

  function closeModal() {
    setShowPaymentModal(false);
    setShowPlaceOrder(true);
    setPlacing(false);
  }

  function closeFormModal() {
    setShowFormModal(false);
  }

  function showForm(method) {
    setShowPaymentModal(false);
    setPaymentMethod(method);
    setShowFormModal(true);
  }

  function simulatePayment() {
    const orderNumber = localStorage.getItem("lastOrderNumber") || "LUX-ORDER";
    localStorage.removeItem("cart");
    localStorage.removeItem("lastOrderNumber");
    closeFormModal();
    alert("Payment Successful!\n\nOrder: " + orderNumber + "\n\nThank you for shopping at Luxx!\nDelivery in under 1 hour!");
    navigate("/");
  }

  return (
    <div className="checkout-page">
      <header>
        <h2>Checkout</h2>
        <button type="button" onClick={() => navigate("/shop")}>&larr; Back to Shop</button>
      </header>

      <div className="container">
        <h2>Billing Details</h2>
        <form id="checkout-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" id="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" id="phone" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <div id="order-summary">
            <h3>Order Summary</h3>
            <div id="items-list">
              {cart.length === 0 ? (
                <p style={{ color: "white" }}>Your cart is empty!</p>
              ) : (
                cart.map((item, index) => (
                  <div className="order-item" key={`${item.name}-${index}`}>
                    <span>{item.name} x{item.quantity}</span>
                    <span>Ksh. {item.price * item.quantity}</span>
                  </div>
                ))
              )}
            </div>
            <div className="order-total">Total: Ksh. <span id="checkout-total">{total}</span></div>
          </div>

          {showPlaceOrder && (
            <button type="button" id="place-order-btn" onClick={handlePlaceOrder} disabled={placing}>
              {placing ? "Processing..." : "Place Order"}
            </button>
          )}
          {!showPlaceOrder && (
            <button type="button" id="pay-now-btn">Pay Now</button>
          )}
        </form>
      </div>

      {/* Payment Method Modal */}
      <div id="payment-modal" className={showPaymentModal ? "show" : ""}>
        <div className="payment-modal-content">
          <h3>Choose Payment Method</h3>
          <button type="button" onClick={() => showForm("mpesa")} className="payment-btn btn-mpesa">M-Pesa</button>
          <button type="button" onClick={() => showForm("paypal")} className="payment-btn btn-paypal">PayPal</button>
          <button type="button" onClick={() => showForm("visa")} className="payment-btn btn-visa">Visa Card</button>
          <button type="button" onClick={closeModal} style={{ marginTop: "15px", color: "orange", background: "transparent" }}>Cancel</button>
        </div>
      </div>

      {/* Payment Form Modal */}
      <div id="payment-form-modal" className={showFormModal ? "show" : ""}>
        <div className="payment-form-content">
          <h3 id="form-title">
            {paymentMethod === "mpesa" && "M-Pesa Payment"}
            {paymentMethod === "paypal" && "PayPal Payment"}
            {paymentMethod === "visa" && "Visa Card Payment"}
          </h3>
          <div id="form-fields">
            {paymentMethod === "mpesa" && (
              <input type="tel" placeholder="M-Pesa Phone (e.g. 0712345678)"
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box" }} />
            )}
            {paymentMethod === "paypal" && (
              <input type="email" placeholder="PayPal Email"
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box" }} />
            )}
            {paymentMethod === "visa" && (
              <>
                <input type="text" placeholder="Card Number (16 digits)"
                  style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box", marginBottom: "8px" }} />
                <input type="text" placeholder="Cardholder Name"
                  style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box", marginBottom: "8px" }} />
                <input type="text" placeholder="Expiry Date (MM/YY)"
                  style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box", marginBottom: "8px" }} />
                <input type="text" placeholder="CVV"
                  style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box" }} />
              </>
            )}
          </div>
          <button type="button" onClick={simulatePayment} style={{ marginTop: "20px", width: "100%" }}>Simulate Payment</button>
          <button type="button" onClick={closeFormModal} style={{ marginTop: "10px", color: "orange", background: "transparent" }}>Cancel</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
