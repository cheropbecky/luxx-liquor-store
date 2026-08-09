import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/shop.css";
import Footer from "../components/Footer";
import products from "../data/products";

function getCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export default function Shop() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [cartCount, setCartCount] = useState(getCartCount());
  const [hoveredId, setHoveredId] = useState(null);

  // =============================================
  // FILTER PRODUCTS FROM LOCAL CATALOG
  // =============================================
  const filteredProducts = useMemo(() => {
    return category === "all"
      ? products
      : products.filter((p) => p.category === category);
  }, [category]);

  // =============================================
  // ADD TO CART (localStorage - unchanged)
  // =============================================
  function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1, image });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(getCartCount());
    alert(`${name} added to cart!`);
  }

  const categories = category === "all" ? [...new Set(filteredProducts.map((p) => p.category))] : null;

  function renderProductCard(product, index) {
    const key = `${product.name}-${index}`;
    return (
      <div
        className={`product${hoveredId === key ? " product-hover" : ""}`}
        key={key}
        onMouseOver={() => setHoveredId(key)}
        onMouseOut={() => setHoveredId(null)}
      >
        <img src={product.image} alt={product.name} width="100%" />
        <h2>{product.name}</h2>
        <p>Ksh.{product.price}</p>
        <button
          className="cart"
          onClick={() => addToCart(product.name, product.price, product.image)}
        >
          Add to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="shop-page">
      {/* navigation bar with Buttons*/}
      <header className="navbar">
        <div className="logo">Luxx</div>
        <div className="buttons">
          <button className="view-cart" onClick={() => navigate("/cart")}>
            View Cart <span className="cart-count">{cartCount}</span>
          </button>
          <button className="home" onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </header>

      {/* Product Category Filter Buttons*/}
      <section className="filters">
        <button className="filter-btn" onClick={() => setCategory("all")}>All</button>
        <button className="filter-btn" onClick={() => setCategory("wines")}>Wines</button>
        <button className="filter-btn" onClick={() => setCategory("whiskey")}>Whiskey</button>
        <button className="filter-btn" onClick={() => setCategory("vodka")}>Vodka</button>
        <button className="filter-btn" onClick={() => setCategory("beer")}>Beer</button>
        <button className="filter-btn" onClick={() => setCategory("softdrinks")}>Soft Drinks</button>
      </section>

      {/* Dynamic product Grid */}
      <section className="shop-preview" id="product-container">
        {filteredProducts.length === 0 && (
          <p style={{ color: "white" }}>No products found.</p>
        )}
        {category === "all" && categories.map((cat) => (
          <div key={cat}>
            <h1 id={cat} className="category-title">{cat}</h1>
            <div className="products">
              {filteredProducts.filter((p) => p.category === cat).map((product, i) => renderProductCard(product, i))}
            </div>
          </div>
        ))}
        {category !== "all" && filteredProducts.length > 0 && (
          <>
            <h1 className="category-title">{category}</h1>
            <div className="products">
              {filteredProducts.map((product, i) => renderProductCard(product, i))}
            </div>
          </>
        )}
      </section>

      {/* Reusable Footer Mount Point */}
      <Footer />
    </div>
  );
}
