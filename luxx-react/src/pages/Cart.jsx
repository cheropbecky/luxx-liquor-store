import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";
import Footer from "../components/Footer";

function readCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(readCart());

  // Change quantity (add or subtract)
  function changeQty(index, change) {
    let updated = readCart();
    updated[index].quantity += change;
    if (updated[index].quantity <= 0) {
      updated.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  }

  // Remove an item entirely
  function removeItem(index) {
    let updated = readCart();
    updated.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      {/* Fixed Navigation Header */}
      <header>
        <h1>Your Cart</h1>
        <button onClick={() => navigate("/shop")}>&larr; Back to Shop</button>
      </header>

      {/* Main Cart Content Area */}
      <div className="container">
        <section id="cart-items">
          {cart.length === 0 ? (
            <p style={{ color: "white" }}>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => {
              const itemTotal = item.price * item.quantity;
              return (
                <div className="cart-item" key={`${item.name}-${index}`}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h2>{item.name}</h2>
                    <p>Price: Ksh. {item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => changeQty(index, -1)}>&minus;</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQty(index, 1)}>+</button>
                    </div>
                    <p>Subtotal: Ksh. {itemTotal}</p>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </div>
                </div>
              );
            })
          )}
        </section>
        <div id="cart-summary">
          <h3>Total: Ksh. <span id="cart-total">{total}</span></h3>
          <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
      </div>

      {/* Footer Mount Point */}
      <Footer />
    </div>
  );
}
